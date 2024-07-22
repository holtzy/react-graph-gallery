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
      text = (
        <>
          <p>Welcome to Bahrain!</p>
          <p>
            There are about 40M people in this country, among them, about 23M
            females.
          </p>
          <p>
            Among them, about 3% of the population are between 0 and 3 years
            old. 4% of the females are between 3 and 6 years old. And so on.
          </p>
          <p>We can plot this: it's called an histogram!</p>
        </>
      );
      break;
    case 2:
      text = (
        <>
          <p>Now, let's do the same for Males will we?</p>
          <p>That's it! We have a population pyramid! 🎉</p>
        </>
      );
      break;
    case 3:
      text = (
        <>
          <p>
            Let's change a bit the style of this. Instead of drawing rectangles,
            we can plot a little line that shows the same information!
          </p>
        </>
      );
      break;
    case 4:
      text = (
        <>
          <p>Let's remove the bar to see?</p>
        </>
      );
      break;
    case 5:
      text = (
        <>
          <p>Hey! We have a bit more of real estate here.</p>
          <p>
            So why not adding data from 1950. The color is a bit darker since it
            is older 🧑‍🍳.
          </p>
        </>
      );
      break;
    case 6:
      text = (
        <>
          <p>You know what?</p>
          <p>
            We have data from 1950 to 2100 (projections included). So let's show
            them all on the same chart!
          </p>
        </>
      );
      break;

    default:
      text = null;
  }
  return text;
};

export const ExplanationSection = ({}: ExplanationSectionProps) => {
  const refs = useRef(sections.map(() => createRef()));

  const [step, setStep] = useState(0);

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStep(1);
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

  let selectedData = null;
  switch (step) {
    case 0:
      selectedData = dummyData;
      break;
    case 1:
      selectedData = bahrainData
        .filter((d) => d.Time === '2000')
        .map((d) => {
          return { ...d, PopMale: 0 };
        });
      break;
    case 2:
      selectedData = bahrainData.filter((d) => d.Time === '2000');
      break;
    case 3:
      selectedData = bahrainData.filter((d) => d.Time === '2000');
      break;
    case 4:
      selectedData = bahrainData.filter((d) => d.Time === '2000');
      break;
    case 5:
      selectedData = bahrainData.filter(
        (d) => d.Time === '2000' || d.Time === '1950'
      );
      break;
    case 6:
      selectedData = bahrainData;
      break;
    default:
      selectedData = dummyData;
  }

  const isLineEnabled = step > 2 ? true : false;
  const isHistogramEnabled = step <= 3 ? true : false;

  return (
    <div
      style={{ backgroundColor: '#121212' }}
      className="text-white font-light text-md wrapper mt-24 pt-24 flex flex-col justify-center items-start"
    >
      <p className="text-gray-400 text-xl uppercase">Looks good but</p>
      <p className="text-7xl  whitespace-nowrap">What the heck is this?</p>

      <div className="h-96" ref={refs.current[0]} id={sections[0]}>
        <p>That's a population pyramid!</p>
        <p>OK, not a very conventional population pyramid. But still!</p>
        <p>Let me show you step by step.</p>

        <div className="grid grid-cols-12">
          {/* LEFT */}
          <div className="col-span-8">
            <div className="flex gap-2 mt-24">
              <button
                onClick={() => {
                  setStep(step - 1);
                }}
                className="opacity-40 px-4 py-2 text-xs font-extralight border border-blue-300 rounded-lg"
              >
                Previous
              </button>
              <button
                onClick={() => {
                  setStep(step + 1);
                }}
                className="px-4 py-2 text-xs font-extralight hover:bg-blue-900 border border-blue-300 rounded-lg"
              >
                Next
              </button>
            </div>

            <div className="mt-12">{getExplanations(step)}</div>
          </div>

          {/* RIGHT */}
          <div className="col-span-4">
            <PopulationPyramid
              data={selectedData}
              width={300}
              height={500}
              highlightedYear={undefined}
              isHistogramEnabled={isHistogramEnabled}
              isLineEnabled={isLineEnabled}
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
