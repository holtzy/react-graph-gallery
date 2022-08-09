type ButtonProps = {
  isDisabled?: boolean;
  isFilled?: boolean;
  children: any;
  onClick: () => void;
  size?: "sm" | "md";
};

export const Button = ({
  children,
  onClick,
  isFilled,
  size = "md",
}: ButtonProps) => {
  let appearance = "rounded m-1 cursor-pointer border-purple-700 border ";

  if (size === "sm") {
    appearance += "text-sm py-1 px-2";
  }
  if (size === "md") {
    appearance += "text-md py-2 px-4";
  }

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
