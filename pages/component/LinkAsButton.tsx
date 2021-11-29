import Link from "next/link";

type LinkAsButtonProps = {
  isDisabled?: boolean;
  isFilled?: boolean;
  children: any;
  href: string;
};

export const LinkAsButton = ({
  children,
  href,
  isFilled,
}: LinkAsButtonProps) => {
  const isOutsideLink = href.startsWith("www") || href.startsWith("http");

  let appearance =
    "font-normal py-2 px-4 rounded m-1 cursor-pointer border-purple-700 border";

  if (isFilled) {
    appearance += " bg-purple-500 hover:bg-purple-700 text-white";
  } else {
    appearance +=
      " bg-white hover:bg-purple-700 hover:text-white text-purple-700";
  }

  const link = (
    <a>
      <span className={appearance}>{children}</span>
    </a>
  );

  if (isOutsideLink) {
    return link;
  } else {
    return (
      <Link href={href} passHref>
        {link}
      </Link>
    );
  }
};
