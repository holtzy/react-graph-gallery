import { useEffect, useState } from "react";
import { DataItem, StreamGraph } from "./StreamGraph";
import { csvParse } from "d3";

type StreamGraphPageViewsProps = {
  width: number;
  height: number;
};

export const StreamGraphPageViews = ({
  width,
  height,
}: StreamGraphPageViewsProps) => {
  const [data, setData] = useState<DataItem[]>();

  // Data is stored on github at .csv format. This loads it.
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/holtzy/react-graph-gallery/main/data/data_page_views.csv"
      );
      const csvData = await response.text();
      const parsedData: DataItem[] = csvParse(csvData);
      setData(parsedData);
    };

    fetchData();
  }, []);

  if (!data) {
    return null;
  }

  return (
    <div>
      <StreamGraph width={width} height={height} data={data} />
    </div>
  );
};
