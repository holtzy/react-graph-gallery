import Link from "next/link";

type LinkAsButtonProps = {
  isDisabled?: boolean;
  isFilled?: boolean;
  children: any;
  href: string;
  size?: "sm" | "md";
  isFaded?: boolean;
};

export const LinkAsButton = ({
  children,
  href,
  isFilled,
  size = "md",
  isFaded,
}: LinkAsButtonProps) => {
  const isOutsideLink = href.startsWith("www") || href.startsWith("http");

  let appearance =
    "font-normal rounded m-1 cursor-pointer border-purple-700 border";

  if (isFilled) {
    appearance += " bg-purple-500 hover:bg-purple-700 text-white ";
  } else {
    appearance +=
      " bg-white hover:bg-purple-700 hover:text-white text-purple-700 s";
  }

  if (size === "sm") {
    appearance += "text-sm py-1 px-2 ";
  }
  if (size === "md") {
    appearance += "text-md py-2 px-4 ";
  }

  if (isFaded) {
    appearance += "opacity-60";
  }
  const link = <span className={appearance}>{children}</span>;

  if (isOutsideLink) {
    return <a href={href}>{link}</a>;
  } else {
    return (
      <Link href={href} passHref>
        <a>{link}</a>
      </Link>
    );
  }
};
