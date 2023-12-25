import { useEffect, useState } from 'react';
import word from './wordList.json';
import HangmanDrawing from './components/HangmanDrawing';
import HangmanWord from './components/HangmanWord';
import Keyboard from './Keyboard';

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(() => {
    return word[Math.floor(Math.random() * word.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const addGuessedLetter = (letter: string) => {
    if (guessedLetters.includes(letter)) return;

    setGuessedLetters((currentLetters) => [...currentLetters, letter]);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    // add event
    document.addEventListener('keypress', handler);

    // clean up function => remove event
    return () => document.removeEventListener('keypress', handler);
  }, []);

  return (
    <section className="max-w-[800px] w-full flex items-center flex-col gap-[2rem] my-0 mx-auto">
      <p className="text-[2rem] text-center">Lose</p>

      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
      <div className="self-stretch">
        <Keyboard />
      </div>
    </section>
  );
}

export default App;
