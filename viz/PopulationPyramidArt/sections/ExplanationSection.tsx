import { createRef, useEffect, useRef, useState } from 'react';
import { ResponsivePopulationPyramid } from '../PopulationPyramid';
import { dummyData } from '../data/dummyData';
import { bahrainData } from '../data/bahrainData';
import { ShakingButton } from '../ui/ShakingButton';
import styles from '../global-style.module.css';

type ExplanationSectionProps = {};

const getExplanations = (id: number) => {
  let text = null;
  switch (id) {
    case 1:
      text = (
        <>
          <p>
            5.2% of the females in Bahrein are between 0 and 3 years old. They
            are represented by the <b>bottom bar</b>.
          </p>
          <p>
            5.1% of the females are between 3 and 6 years old, represented by
            the next bar.
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
          <p>Now, let's do the same for males on the other side.</p>
          <p>
            That's it! We've successfully constructed a{' '}
            <span className={styles.strongText}>population pyramid</span> for
            males! 🎉
          </p>
          <p>It's a famous chart type, but...</p>
        </>
      );
      break;
    case 3:
      text = (
        <>
          <p>We could save a bit of real estate here.</p>
          <p>
            Instead of drawing rectangles, we can plot a little <b>line</b> that
            shows the same information!
          </p>
        </>
      );
      break;
    case 4:
      text = (
        <>
          <p>
            Now, let's apply the same analysis to the data recorded in 1950.
          </p>
          <p>
            Notice the color encoding: older years are represented in dark blue,
            while recent years are shown with a lighter color.
          </p>
          <p>We can now compare the data from 1950 with the data from 2024!</p>
        </>
      );
      break;
    case 5:
      text = (
        <>
          <p>
            Thanks to the United Nations, we have data ranging from 1950 to
            2100, including projections.
          </p>
          <p>
            This allows us to display all the data on a single chart, providing
            a comprehensive visualization for this project!
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
            if (entry.boundingClientRect.top > 0) {
              setStep(0);
            }
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
      selectedData = bahrainData.filter(
        (d) => d.Time === '2000' || d.Time === '1950'
      );
      break;
    case 5:
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
        <ShakingButton>
          <button
            onClick={() => {
              setStep(step + 1);
            }}
            className="px-4 py-2 text-xs font-extralight hover:bg-blue-900 border border-blue-300 rounded-lg"
          >
            Next
          </button>
        </ShakingButton>
      )}
    </div>
  );

  return (
    <div
      style={{ backgroundColor: '#121212' }}
      className="my-24 py-24"
      ref={ref}
    >
      <div className="narrowWrapper">
        <p className="text-gray-400 text-xl uppercase">Looks good but</p>
        <p className="text-7xl">What's this?</p>

        <p>
          These organic shapes look quite appealing. But do they actually{' '}
          <b>mean anything</b>? 🤔
        </p>
        <p>
          <span className={styles.strongText}>They do!</span>
        </p>
        <p>
          They're a creative way to represent the <b>evolution</b> of the{' '}
          <b>population pyramid</b> of a country over time.
        </p>
        <br />
        <p>Let me walk you through it step by step:</p>
      </div>

      <br />
      <br />

      <div className="relative wrapper">
        <div className="relative grid grid-cols-12">
          {/* LEFT */}
          <div className="relative h-96 col-span-12 sm:col-span-6  ">
            <ResponsivePopulationPyramid
              data={selectedData}
              highlightedYear={undefined}
              isHistogramEnabled={isHistogramEnabled}
              histogramOpacity={histogramOpacity}
              isLineEnabled={isLineEnabled}
            />
          </div>

          {/* RIGHT */}
          <div className="col-span-12 sm:col-span-6 flex flex-col justify-center">
            {step > 0 && <div>{getExplanations(step)}</div>}
          </div>
        </div>

        <div className="w-full flex justify-center">{prevAndNextButtons}</div>
      </div>
    </div>
  );
};
