import { ReactElement } from "react";

type ParallaxSectionProps = {
  height: number;
  imgLink: string;
  opacity: number;
  children: ReactElement;
};

export const ParallaxSection = ({
  imgLink,
  height,
  opacity,
  children,
}: ParallaxSectionProps) => {
  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: "url(" + imgLink + ")",
          height,
          backgroundAttachment: "fixed",
          opacity,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="mt-12"
      />
      <div className="absolute top-0 left-0 w-full h-full">{children}</div>
    </div>
  );
};
