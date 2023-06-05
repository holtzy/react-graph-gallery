type ToDoSectionProps = {
  text: string;
};

export const ToDoSection = ({ text }: ToDoSectionProps) => {
  return (
    <blockquote className="mt-10 opacity-20">
      <b className="text-reactGallery mr-4">ToDo</b>
      {text}
    </blockquote>
  );
};
