import { createRef, useEffect, useRef, useState } from 'react';
import { PopulationPyramid } from './PopulationPyramid';
import { dummyData } from './dummyData';
import { bahrainData } from './bahrainData';

type ExplanationSectionProps = {};

const sections = ['section1', 'section2', 'section3'];

export const ExplanationSection = ({}: ExplanationSectionProps) => {
  const refs = useRef(sections.map(() => createRef()));

  const [opacity, setOpacity] = useState(0);

  const [selectedData, setSelectedData] = useState(dummyData);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(`${entry.target.id} is in view!`);

            if (entry.target.id === 'section2') {
              setOpacity(1);
              setSelectedData(bahrainData);
            }
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    refs.current.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.current.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="text-white text-sm wrapper mt-24 flex flex-col justify-center items-start">
      <p className="text-gray-400 text-xl uppercase">Looks good but</p>
      <p className="text-7xl  whitespace-nowrap">What the heck is this?</p>

      <div className="h-96" ref={refs.current[0]} id={sections[0]}>
        <p>That's a population pyramid!</p>
        <p>OK, not a very conventional population pyramid. But still!</p>
      </div>
      <div className="h-96"></div>

      <div
        className="h-96"
        ref={refs.current[1]}
        id={sections[1]}
        style={{ opacity }}
      >
        <p>that's the second section</p>
        <p>OK, not a very conventional population pyramid. But still!</p>
        <PopulationPyramid
          data={selectedData}
          width={300}
          height={500}
          highlightedYear={undefined}
        />
      </div>

      <div className="h-96"></div>
      <div className="h-96" ref={refs.current[2]} id={sections[2]}>
        <p>And the third</p>
        <p>OK, not a very conventional population pyramid. But still!</p>
      </div>
    </div>
  );
};
