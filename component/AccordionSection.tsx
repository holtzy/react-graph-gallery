import { useState } from "react";

type AccordionSectionProps = {
  startOpen: boolean;
  title: string;
  children: React.ReactNode;
};

export const AccordionSection = ({
  startOpen,
  title,
  children,
}: AccordionSectionProps) => {
  const [isOpen, setIsOpen] = useState(startOpen);
  const cssHeight = isOpen ? "max-h-0" : "max-h-full";

  return (
    <>
      <h2 className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
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
          "overflow-hidden transition-max-height ease-in duration-100 " +
          " " +
          cssHeight
        }
      >
        {children}
      </div>
    </>
  );
};
