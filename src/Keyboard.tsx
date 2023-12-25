// import styles from './keyboard.module.css';

const KEYS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const Keyboard = () => {
  return (
    <div className="grid grid-cols-keyboard gap-[0.5rem]">
      {KEYS.map((key) => {
        return (
          <button
            key={key}
            className={`w-full border-[3px] border-solid border-black bg-transparent text-4xl uppercase p-[0.5rem] font-bold cursor-pointer text-black aspect-square transition-all duration-75 ease-in hover:bg-bgHSL hover:text-white focus:bg-bgHSL focus:text-white`}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};
export default Keyboard;
