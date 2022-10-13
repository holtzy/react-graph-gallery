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
    "font-normal rounded m-1 cursor-pointer border-reactGallery border ";

  if (isFilled) {
    appearance += " bg-reactGallery hover:bg-reactGallery text-white ";
  } else {
    appearance +=
      " bg-white hover:bg-reactGallery hover:text-white text-reactGallery ";
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
