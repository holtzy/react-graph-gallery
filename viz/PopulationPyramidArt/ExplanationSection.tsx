import { createRef, useEffect, useRef, useState } from 'react';
import { PopulationPyramid } from './PopulationPyramid';
import { dummyData } from './dummyData';
import { bahrainData } from './bahrainData';

type ExplanationSectionProps = {};

const sections = ['section1', 'section2', 'section3'];

const getExplanations = (id: number) => {
  let text = null;
  switch (id) {
    case 1:
      text = <p>Just an histogram</p>;
      break;
    case 2:
      text = <p>With the lines mate!</p>;
      break;
    case 3:
      text = 'State is 2';
      break;
    default:
      text = null;
  }
  return text;
};

export const ExplanationSection = ({}: ExplanationSectionProps) => {
  const refs = useRef(sections.map(() => createRef()));

  const [step, setStep] = useState(1);

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(`${entry.target.id} is in view!`);

            if (entry.target.id === 'section2') {
              setOpacity(1);
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

  const selectedData = step === 1 ? dummyData : bahrainData;

  return (
    <div className="text-white text-sm wrapper mt-24 flex flex-col justify-center items-start">
      <p className="text-gray-400 text-xl uppercase">Looks good but</p>
      <p className="text-7xl  whitespace-nowrap">What the heck is this?</p>

      <div className="h-96" ref={refs.current[0]} id={sections[0]}>
        <p>That's a population pyramid!</p>

        <div className="grid grid-cols-12">
          {/* LEFT */}
          <div className="col-span-8">
            <p>OK, not a very conventional population pyramid. But still!</p>
            <p>Let me show you step by step.</p>
            <br></br>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                Previous step
              </button>
              <p>{'Step ' + step}</p>
              <button
                onClick={() => {
                  setStep(step + 1);
                }}
              >
                Next step
              </button>
            </div>
            <div>{getExplanations(step)}</div>
          </div>

          {/* RIGHT */}
          <div className="col-span-4">
            <PopulationPyramid
              data={selectedData}
              width={300}
              height={500}
              highlightedYear={undefined}
            />
          </div>
        </div>
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
      </div>
    </div>
  );
};
