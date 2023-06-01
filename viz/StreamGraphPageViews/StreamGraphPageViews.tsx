import { useEffect, useState } from "react";
import { DataItem, StreamGraph, parseTime } from "./StreamGraph";
import { csvParse } from "d3";
import * as d3 from "d3";

const HEADER_HEIGHT = 150;
const monthTimeFormatter = d3.timeFormat("%B %Y");

type StreamGraphPageViewsProps = {
  width: number;
  height: number;
};

export const StreamGraphPageViews = ({
  width,
  height,
}: StreamGraphPageViewsProps) => {
  const [data, setData] = useState<DataItem[]>();

  const [startDate, setStartDate] = useState(parseTime("2015-01-01"));

  // Data is stored on github at .csv format. This loads it.
  // Note that data is stored in a "long" format. It will be converted to a wide format by the renderer.
  // See the streamgraph section of the react graph gallery for explanations.
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

  if (!data || !startDate) {
    return null;
  }

  return (
    <div>
      <div style={{ height: HEADER_HEIGHT }}>
        <p style={{ fontSize: 17, paddingTop: 40, marginBottom: 0 }}>
          <b>
            Chat-GPT hasn't impacted tech websites traffic significantly (yet)
          </b>
        </p>

        <div style={{ display: "flex", alignItems: "center" }}>
          <p
            style={{
              fontSize: 12,
              width: 155,
              paddingTop: 11,
            }}
          >
            {"Data since "}
            <b>{monthTimeFormatter(startDate)}</b>
          </p>
          <input
            type="range"
            min={parseTime("2015-01-01")?.getTime()}
            max={parseTime("2022-09-01")?.getTime()}
            value={startDate.getTime()}
            step={10000}
            onChange={(e) => setStartDate(new Date(Number(e.target.value)))}
            style={{ height: 1, opacity: 0.5, width: 80 }}
          />
        </div>
      </div>
      <StreamGraph
        width={width}
        height={height - HEADER_HEIGHT}
        data={data}
        startDate={startDate}
      />
    </div>
  );
};
