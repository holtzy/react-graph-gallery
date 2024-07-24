import { csv } from 'd3';
import { ResponsivePopulationPyramid } from './PopulationPyramid';
import { useEffect, useMemo, useState } from 'react';
import { HorizontalTabBar } from './HorizontalTabBar';
import { Legend } from './plot/Legend';
import { bahrainData } from './data/bahrainData';
import { dummyData } from './data/dummyData';
import { ExplanationSection } from './sections/ExplanationSection';
import { DataItem } from './types';
import { ConclusionSection } from './sections/ConclusionSection';

import styles from './global-style.module.css';
import { BabyBoomSection } from './sections/BabyBoomSection';
import { WeirdosSection } from './sections/WeirdosSection';

export const PopulationPyramidArtDemo = () => {
  const [data, setData] = useState<DataItem[] | undefined>(undefined);
  const [loadingData, setLoadingData] = useState<DataItem[]>(dummyData);
  const [selectedGroup, setSelectedGroup] = useState(10);
  const [isForecastEnabled, setIsForecastEnabled] = useState(true);
  const [highlightedYear, setHighlightedYear] = useState<number | undefined>();

  const allGroups = useMemo(() => {
    return [...new Set((data || dummyData).map((d) => d.Location))].sort();
  }, [data]);

  // Not very clean
  // But I need the ISO2_code somewhere to get the flag in the TabBar
  const allGroupsWithCode = useMemo(() => {
    return [
      ...new Set(
        (data || dummyData).map((d) => {
          return d.Location + '---' + d.ISO2_code;
        })
      ),
    ].sort();
  }, [data]);

  const franceId = allGroups.findIndex((g) => g === 'France');
  const bahrainId = allGroups.findIndex((g) => g === 'Bahrain');
  const japanId = allGroups.findIndex((g) => g === 'Japan');
  const nigeriaId = allGroups.findIndex((g) => g === 'Nigeria');

  // Load bahrain data 1 sec after the dummy data to trigger an animation
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoadingData(bahrainData);
    }, 1500);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    csv(
      'https://raw.githubusercontent.com/holtzy/react-graph-gallery/main/data/population-pyramid-percentage.csv'
    )
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error loading the CSV data', error);
      });
  }, []);

  const plot = (
    <div className="relative w-full h-full max-w-5xl px-8">
      <ResponsivePopulationPyramid
        data={
          data
            ? data.filter((d) => d.Location === allGroups[selectedGroup])
            : dummyData
        }
        highlightedYear={highlightedYear}
        isHistogramEnabled={false}
        isLineEnabled={true}
      />
    </div>
  );

  const tabBar = (
    <div className="relative w-full h-12 flex justify-center">
      <HorizontalTabBar
        selectedItem={selectedGroup}
        items={allGroupsWithCode}
        setSelectedItem={setSelectedGroup}
        isActive={true}
      />
    </div>
  );

  const introduction = (
    <div className="narrowWrapper">
      <div className="flex flex-col justify-center items-center">
        <p className="text-gray-400 text-xl uppercase">Watch the world...</p>
        <p className="text-7xl">Getting older</p>
        <div className="mt-4 max-w-lg text-center">
          <p>
            Some countries are experiencing an{' '}
            <a
              onClick={() => {
                setSelectedGroup(japanId);
              }}
            >
              aging population
            </a>
            , while others are in the midst of a{' '}
            <a
              onClick={() => {
                setSelectedGroup(nigeriaId);
              }}
            >
              baby boom
            </a>
            . Some face unusual demographic{' '}
            <a
              onClick={() => {
                setSelectedGroup(bahrainId);
              }}
            >
              shifts
            </a>{' '}
            when some others are surprisingly{' '}
            <a
              onClick={() => {
                setSelectedGroup(franceId);
              }}
            >
              stable
            </a>
            . Dive into the intriguing patterns of global population dynamics
            with this captivating set of lines.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.mainContainer}>
      <div className="relative pt-32">
        <div className="absolute top-2 right-2">
          <p className="text-xs">
            <i>
              A work by <a href="https://www.yan-holtz.com">Yan Holtz</a> for
              the{' '}
              <a href="https://www.react-graph-gallery.com">
                React Graph Gallery
              </a>
            </i>
          </p>
        </div>
        {introduction}
        <br />
        {tabBar}
        <div
          className="relative flex justify-center w-full"
          style={{ height: `calc(100vh - 100px)`, maxHeight: 900 }}
        >
          {plot}
          <div className="absolute top-1/2 left-10 transform -translate-x-1/2">
            <Legend setHighlightedYear={setHighlightedYear} />
          </div>
        </div>

        <ExplanationSection />
        {data && (
          <>
            <BabyBoomSection data={data.filter((d) => Number(d.Time) < 2025)} />
            <WeirdosSection
              data={data.filter((d) => Number(d.Time) < 2025)}
              allGroupsWithCode={allGroupsWithCode}
            />
          </>
        )}
        <ConclusionSection />
      </div>
    </div>
  );
};
