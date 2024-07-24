import { useEffect, useRef } from 'react';

type HorizontalTabBarProps = {
  selectedItem: number;
  setSelectedItem: (val: number) => void;
  items: string[];
  isActive: boolean; // do not try to scroll if not active (fixing bug when several TabBar are displayed)
};

export const HorizontalTabBar = ({
  selectedItem,
  setSelectedItem,
  items,
  isActive,
}: HorizontalTabBarProps) => {
  const containerRef = useRef(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const scrollToButton = (index: number) => {
    const targetRef = buttonRefs.current[index];
    if (targetRef) {
      targetRef.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  };

  useEffect(() => {
    if (isActive) {
      scrollToButton(selectedItem);
    }
  }, [selectedItem, items]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
        return;
      }

      if (!isActive) {
        return;
      }

      event.preventDefault();

      let targetId = selectedItem;

      if (event.key === 'ArrowRight') {
        targetId += 1;
      } else if (event.key === 'ArrowLeft') {
        targetId -= 1;
      }

      if (targetId < 0) {
        targetId = items.length - 1;
      }
      if (targetId > items.length - 1) {
        targetId = 0;
      }

      setSelectedItem(targetId);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedItem, setSelectedItem, items]);

  const groupSelectButtons = items.map((grp, i) => {
    const country = grp.split('---')[0];
    const countryCode = grp.split('---')[1];
    return (
      <button
        key={i}
        className={`text-xs px-2 py-1 bg-black border text-white rounded-lg flex-shrink-0 ${
          i === selectedItem
            ? 'opacity-100 border-blue-500'
            : 'opacity-40 border-white border-opacity-40'
        }`}
        onClick={() => setSelectedItem(i)}
        ref={(el) => (buttonRefs.current[i] = el)}
      >
        {getFlagEmoji(countryCode) + ' ' + country}
      </button>
    );
  });

  return (
    <div className="relative max-w-lg w-full">
      <div
        ref={containerRef}
        className="overflow-scroll w-full flex gap-1 noScrollBar"
      >
        {groupSelectButtons}
      </div>
      <div className="absolute inset-y-0 left-0 w-28 h-full  bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-28 h-full  bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
    </div>
  );
};

export default function getFlagEmoji(countryCode: string) {
  return [...countryCode.toUpperCase()]
    .map((char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
    .reduce((a, b) => `${a}${b}`);
}
