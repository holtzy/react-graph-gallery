import { createRef, useEffect, useRef, useState } from 'react';
import {
  PopulationPyramid,
  ResponsivePopulationPyramid,
} from '../PopulationPyramid';
import { dummyData } from '../data/dummyData';
import { bahrainData } from '../data/bahrainData';

type ExplanationSectionProps = {};

const sections = ['section1', 'section2', 'section3'];

const getExplanations = (id: number) => {
  let text = null;
  switch (id) {
    case 1:
      text = (
        <>
          <p>Bahrain has a population of about 23 million females.</p>
          <p>
            3% of these females are between 0 and 3 years old, represented by
            the <b>bottom bar</b>.
          </p>
          <p>
            4% of the females are between 3 and 6 years old, represented by the
            next bar.
          </p>
          <p>
            Each bar shows a different age group, creating a{' '}
            <a
              href="https://www.data-to-viz.com/graph/histogram.html"
              className="cursor-pointer text-blue-400 hover:text-blue-500 hover:underline"
            >
              histogram
            </a>{' '}
            that displays the age distribution of the female population.
          </p>
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
  const ref = useRef(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStep(1);
          } else {
            setStep(0);
          }
        });
      },
      {
        threshold: 0.8,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
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
          return { ...d, PopMale: '0' };
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
  const histogramOpacity = step > 2 ? 0.1 : 1;

  const prevAndNextButtons = (
    <div className="flex gap-2 mt-12">
      {step > 1 && (
        <button
          onClick={() => {
            setStep(step - 1);
          }}
          className="opacity-40 px-4 py-2 text-xs font-extralight border border-blue-300 rounded-lg"
        >
          Previous
        </button>
      )}
      {step < 5 && (
        <button
          onClick={() => {
            setStep(step + 1);
          }}
          className="px-4 py-2 text-xs font-extralight hover:bg-blue-900 border border-blue-300 rounded-lg"
        >
          Next
        </button>
      )}
    </div>
  );

  return (
    <div
      style={{ backgroundColor: '#121212' }}
      className="wrapper mt-24 pt-24 flex flex-col justify-center items-start"
      ref={ref}
    >
      <p className="text-gray-400 text-xl uppercase">Looks good but</p>
      <p className="hidden sm:block text-7xl">What the heck is this?</p>
      <p className="block sm:hidden text-7xl">What's this?</p>

      <div>
        <p>
          These organic shapes look quite appealing.
          <br />
          But do they actually mean anything?
        </p>
        <p>
          Yes, they do!
          <br />
          They're a creative way to represent the <b>evolution</b> of the{' '}
          <b>population pyramid</b> over time.
        </p>
        <br />
        <p>Let me walk you through it step by step:</p>

        <div className="grid grid-cols-12">
          {/* LEFT */}
          <div className="col-span-12 sm:col-span-6">
            <ResponsivePopulationPyramid
              data={selectedData}
              highlightedYear={undefined}
              isHistogramEnabled={isHistogramEnabled}
              histogramOpacity={histogramOpacity}
              isLineEnabled={isLineEnabled}
            />
          </div>

          {/* RIGHT */}
          <div className="col-span-12 sm:col-span-6 flex flex-col justify-end mb-16">
            {step > 0 && (
              <>
                <div className="mt-12">{getExplanations(step)}</div>
                {prevAndNextButtons}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
