import { useEffect } from 'react';

type HorizontalTabBarProps = {
  selectedItem: number;
  setSelectedItem: (val: number) => void;
  items: string[];
};

export const HorizontalTabBar = ({
  selectedItem,
  setSelectedItem,
  items,
}: HorizontalTabBarProps) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        setSelectedItem(selectedItem + 1);
      } else if (event.key === 'ArrowLeft') {
        setSelectedItem(selectedItem - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedItem]);

  const groupSelectButtons = items.map((grp, i) => {
    return (
      <button
        key={i}
        className={`text-xs px-2 py-1 bg-black border border-white text-white rounded-lg whitespace-nowrap flex-shrink-0`}
        onClick={() => setSelectedItem(i)}
      >
        {grp}
      </button>
    );
  });

  return (
    <div className="relative max-w-3xl">
      <div className="overflow-scroll w-full flex gap-1">
        {groupSelectButtons}
      </div>
      <div className="absolute inset-y-0 left-0 w-28 h-full  bg-gradient-to-r from-black to-transparent"></div>
      <div className="absolute inset-y-0 right-0 w-28 h-full  bg-gradient-to-l from-black to-transparent"></div>
    </div>
  );
};
