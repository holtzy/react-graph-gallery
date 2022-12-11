import React from "react";

interface ImageGridProps {
  children: React.ReactNode;
}

export const ImageGrid = ({ children }: ImageGridProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">{children}</div>
  );
};
