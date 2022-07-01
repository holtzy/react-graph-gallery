import { useState } from "react";

type AccordionSectionProps = {
  startOpen: boolean;
  title: React.ReactNode;
  children: React.ReactNode;
};

export const AccordionSection = ({
  startOpen,
  title,
  children,
}: AccordionSectionProps) => {
  const [isOpen, setIsOpen] = useState(startOpen);
  const cssHeight = isOpen ? "max-h-full" : "max-h-0";
  const overflow = isOpen ? "overflow-visible" : "overflow-hidden";

  return (
    <>
      <h2 className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? (
          <span className="text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block">
            &#43;
          </span>
        ) : (
          <span className="text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block">
            &#45;
          </span>
        )}
        {title}
      </h2>
      <div
        className={
          "transition-max-height ease-in duration-300 " +
          " " +
          cssHeight +
          " " +
          overflow
        }
      >
        {children}
      </div>
    </>
  );
};
