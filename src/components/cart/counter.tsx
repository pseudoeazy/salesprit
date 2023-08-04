import Plus from "assets/icons/plus-icon";
import Minus from "assets/icons/minus-icon";
import Trash from "assets/icons/trash";
import IconButton from "./icon-button";

export const tuple = <T extends string[]>(...args: T) => args;

const CounterSizes = tuple("big", "normal");
type CounterSizes = (typeof CounterSizes)[number];

const CounterBase =
  "w-24 group flex items-center justify-between flex-shrink-0 rounded overflow-hidden  shadow-floatingUp";

const CounterValue =
  "font-semibold text-13px text-primary flex items-center justify-center h-full w-40px transition-colors duration-250 ease-in-out cursor-default";

const CounterSize = {
  big: "h-12",
  normal: "h-35px",
};

type CounterProps = {
  className?: string;
  value: number;
  size?: CounterSizes;
  onDecrement: (e: any) => void;
  onIncrement: (e: any) => void;
};

const Counter: React.FC<CounterProps> = ({
  onDecrement,
  onIncrement,
  value,
  size = "normal",
  className = "",
}) => {
  const classNames = CounterBase + " " + CounterSize[size] + " " + className;
  return (
    <div className={classNames}>
      <IconButton
        onClick={onDecrement}
        className={`h-[1.65rem] w-[1.65rem] rounded-full bg-mygray  text-black  transition duration-300 hover:bg-gray-300 focus:outline-none`}
      >
        {value > 1 ? <Minus /> : <Trash />}
      </IconButton>

      <span className={CounterValue}>{value}</span>

      <IconButton
        onClick={onIncrement}
        className={`h-[1.65rem] w-[1.65rem] rounded-full bg-primary text-white  transition duration-300 hover:bg-gray-3a focus:outline-none`}
      >
        <Plus />
      </IconButton>
    </div>
  );
};

export default Counter;
