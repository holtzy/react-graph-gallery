import { useEffect, useMemo, useRef } from "react";
import d3Cloud from "d3-cloud";
import { select } from "d3";

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
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const el = ref.current;

    // clear old words
    select(el).selectAll("*").remove();

    const layout = d3Cloud<Word>()
      .words(data)
      .size([width, height])
      .on("end", (words) => {
        const [w, h] = layout.size();
        select(el)
          .append("svg")
          .attr("viewBox", `0 0 ${w} ${h}`)
          .attr("preserveAspectRatio", "xMinYMin meet")
          .append("g")
          .attr("transform", `translate(${w / 2},${h / 2})`)
          .selectAll("text")
          .data(words)
          .enter()
          .append("text")
          .attr("text-anchor", "middle")
          .attr(
            "transform",
            (d) => `translate(${[d.x, d.y]})rotate(${d.rotate})`
          )
          .text((d) => d.text);
      });

    layout.start();
  }, [width, height, data]);

  return <div style={{ width, height }} ref={ref} />;
};
