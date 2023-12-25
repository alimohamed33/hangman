const HEAD = (
  <div className="h-[50px] w-[50px] border-black border-solid border-[10px] rounded-[100%] absolute right-[-20px] top-[50px]" />
);
const BODY = (
  <div className="h-[100px] w-[10px] bg-black absolute top-[100px] right-0" />
);
const RIGHT_ARM = (
  <div className="w-[100px] h-[10px] bg-black absolute top-[120px] right-[-90px] rotate-[-30deg] origin-left-bottom" />
);
const LEFT_ARM = (
  <div className="w-[100px] h-[10px] bg-black absolute top-[120px] right-0 rotate-[30deg] origin-right-bottom" />
);
const RIGHT_LEG = (
  <div className="w-[100px] h-[10px] bg-black absolute top-[230px] right-[-70px] rotate-[60deg] origin-left-bottom" />
);
const LEFT_LEG = (
  <div className="w-[100px] h-[10px] bg-black absolute top-[230px] right-[-20px] rotate-[-60deg] origin-right-bottom" />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type handmanDrawingPorps = {
  numberOfGuesses: number;
};

const HangmanDrawing = ({ numberOfGuesses }: handmanDrawingPorps) => {
  return (
    <div className="relative">
      {BODY_PARTS.slice(0, numberOfGuesses)}

      <div className="h-[50px] w-[10px] bg-black absolute top-0 right-0" />
      <div className="h-[10px] w-[200px] bg-black  ml-[120px]" />
      <div className="w-[10px] h-[400px] bg-black ml-[120px]" />
      <div className="w-[250px] h-[10px] bg-black" />
    </div>
  );
};
export default HangmanDrawing;
