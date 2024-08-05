type AccordionProps = {
  title: React.ReactNode;
  children: React.ReactNode;
};

export const Accordion = ({ title, children }: AccordionProps) => {
  return (
    <details className="bg-gray-50 py-2 px-4 rounded-md my-2">
      <summary className="cursor-pointer">{title}</summary>
      <div className="pt-4">{children}</div>
    </details>
  );
};
