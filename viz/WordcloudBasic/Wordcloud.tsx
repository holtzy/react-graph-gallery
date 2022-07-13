import { useEffect, useMemo } from "react";
import d3Cloud from "d3-cloud";

type WordcloudProps = {
  width: number;
  height: number;
  data: number[];
};

export const Wordcloud = ({ width, height, data }: WordcloudProps) => {
  // const draw = (words: any) => {
  //   console.log("ddd");
  // };

  // const layout = d3Cloud()
  //   .size([width, height])
  //   .words([{ text: "hello" }, { text: "you" }])
  //   .padding(10)
  //   .fontSize(60);
  // // .on("end", draw);

  // useEffect(() => {
  //   layout.start();
  // }, [width, height, data]);

  return (
    <svg width={width} height={height}>
      {/* {allRects} */}
    </svg>
  );
};
