type hangmanWordProps = {
  wordToGuess: string;
  guessedLetters: string[];
};

const HnagmanWord = ({ wordToGuess, guessedLetters }: hangmanWordProps) => {
  return (
    <div className="flex gap-[0.25em] text-[6rem] uppercase font-medium font-mono">
      {wordToGuess.split('').map((letter, index) => (
        <div
          key={index}
          className="text-center border-b-[0.1em] border-solid border-black"
        >
          <span
            className={`${
              guessedLetters.includes(letter) ? 'visible' : 'invisible'
            }`}
          >
            {letter}
          </span>
        </div>
      ))}
    </div>
  );
};
export default HnagmanWord;
