import React from "react";
import { ResponsiveLine } from "@nivo/line";

const SparkLine = ({ data }) => {
  return (
    <ResponsiveLine
      data={data}
      axisBottom={null}
      axisLeft={null}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={0}
      enableGridY={false}
      enableGridX={false}
      pointBorderColor={{ from: "serieColor" }}
      useMesh={true}
    />
  );
};

export default SparkLine;
