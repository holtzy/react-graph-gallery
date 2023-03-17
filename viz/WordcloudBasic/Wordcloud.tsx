import { useEffect, useMemo, useRef, useState } from "react";
import d3Cloud from "d3-cloud";
import { interpolateInferno, scaleLinear, scaleSequential } from "d3";

interface Datum {
  text: string;
  value: number;
}

type WordcloudProps = {
  width: number;
  height: number;
  data: Datum[];
};

export interface Word extends d3Cloud.Word {
  text: string;
  value: number;
}

export const Wordcloud = ({ width, height, data }: WordcloudProps) => {
  const [wordsPosition, setWordsPosition] = useState<Word[]>([]);

  const fontSizeScale = scaleLinear().domain([0, 100]).range([12, 35]);
  const colorScale = scaleSequential()
    .domain([0, 100])
    .interpolator(interpolateInferno);

  const layout = d3Cloud<Word>()
    .words(data)
    .timeInterval(100)
    .size([width, height])
    .fontSize((d) => fontSizeScale(d.value))
    .padding(10)
    .on("end", (words) => {
      setWordsPosition(words);
    });

  useEffect(() => {
    if (!width) {
      return;
    }
    layout.start();
  }, [width]);

  return (
    <div style={{ width, height, position: "relative" }}>
      <div style={{ transform: `translate(${width / 2}px,${height / 2}px)` }}>
        {wordsPosition.map((word, i) => (
          <p
            key={i}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              fontSize: word.size,
              textAnchor: "middle",
              transform: `translate(${word.x}px,${word.y}px)rotate(${word.rotate}deg)`,
              color: colorScale(word.value),
              font: "serif",
            }}
          >
            {word.text}
          </p>
        ))}
      </div>
    </div>
  );
};
