type PillProps = {
  color: string;
  label: string;
  opacity?: number;
};

export const Pill = ({ label, color, opacity }: PillProps) => {
  return (
    <button
      style={{ backgroundColor: color, opacity: opacity || 1 }}
      className="py-0 px-2 no-underline rounded-full text-white font-sans font-light text-sm mr-2"
    >
      {label}
    </button>
  );
};
