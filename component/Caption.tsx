type CaptionProps = {
  children: React.ReactNode;
};

export const Caption = ({ children }: CaptionProps) => {
  return (
    <p className="text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light">
      {children}
    </p>
  );
};
