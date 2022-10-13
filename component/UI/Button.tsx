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
  let appearance = "rounded m-1 cursor-pointer border-reactGallery border ";

  if (size === "sm") {
    appearance += "text-sm py-1 px-2";
  }
  if (size === "md") {
    appearance += "text-md py-2 px-4";
  }

  if (isFilled) {
    appearance += " bg-reactGallery hover:bg-reactGallery text-white";
  } else {
    appearance +=
      " bg-white hover:bg-reactGallery hover:text-white text-reactGallery";
  }

  return (
    <button className={appearance} onClick={onClick}>
      {children}
    </button>
  );
};
