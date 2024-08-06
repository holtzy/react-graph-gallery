// Add some text in the margin
// Note: it will be positioned relative to the ancestor that is positioned!

import { ReactNode } from 'react';

type SidenoteProps = {
  text: ReactNode;
};
export const Sidenote = ({ text }: SidenoteProps) => {
  return (
    <div className="hidden absolute w-60 top-1/2 -right-10 border-l text-card-foreground border-card-foreground h-28 translate-x-full -translate-y-1/2 xl:flex items-center ">
      <span className="">&rarr;</span>
      <span className="text-sm ml-2 opacity-70">{text}</span>
    </div>
  );
};
