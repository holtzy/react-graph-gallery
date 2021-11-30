type ButtonProps = {
  isDisabled?: boolean;
  isFilled?: boolean;
  children: any;
  onClick: () => void;
};

export const Button = ({ children, onClick, isFilled }: ButtonProps) => {
  let appearance =
    "font-normal py-2 px-4 rounded m-1 cursor-pointer border-purple-700 border";

  if (isFilled) {
    appearance += " bg-purple-500 hover:bg-purple-700 text-white";
  } else {
    appearance +=
      " bg-white hover:bg-purple-700 hover:text-white text-purple-700";
  }

  return (
    <button className={appearance} onClick={onClick}>
      {children}
    </button>
  );
};
