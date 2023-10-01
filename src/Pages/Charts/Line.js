import { ResponsiveLine } from "@nivo/line";
export const lineDate = [
  {
    id: "japan",
    color: "hsl(306, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 231,
      },
      {
        x: "helicopter",
        y: 12,
      },
      {
        x: "boat",
        y: 233,
      },
      {
        x: "train",
        y: 120,
      },
      {
        x: "subway",
        y: 142,
      },
      {
        x: "bus",
        y: 177,
      },
      {
        x: "car",
        y: 224,
      },
      {
        x: "moto",
        y: 117,
      },
      {
        x: "bicycle",
        y: 297,
      },
      {
        x: "horse",
        y: 89,
      },
      {
        x: "skateboard",
        y: 108,
      },
      {
        x: "others",
        y: 2,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(246, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 41,
      },
      {
        x: "helicopter",
        y: 89,
      },
      {
        x: "boat",
        y: 138,
      },
      {
        x: "train",
        y: 120,
      },
      {
        x: "subway",
        y: 52,
      },
      {
        x: "bus",
        y: 12,
      },
      {
        x: "car",
        y: 175,
      },
      {
        x: "moto",
        y: 59,
      },
      {
        x: "bicycle",
        y: 170,
      },
      {
        x: "horse",
        y: 274,
      },
      {
        x: "skateboard",
        y: 246,
      },
      {
        x: "others",
        y: 135,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(231, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 34,
      },
      {
        x: "helicopter",
        y: 183,
      },
      {
        x: "boat",
        y: 231,
      },
      {
        x: "train",
        y: 220,
      },
      {
        x: "subway",
        y: 167,
      },
      {
        x: "bus",
        y: 160,
      },
      {
        x: "car",
        y: 137,
      },
      {
        x: "moto",
        y: 166,
      },
      {
        x: "bicycle",
        y: 127,
      },
      {
        x: "horse",
        y: 100,
      },
      {
        x: "skateboard",
        y: 246,
      },
      {
        x: "others",
        y: 185,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(134, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 291,
      },
      {
        x: "helicopter",
        y: 236,
      },
      {
        x: "boat",
        y: 159,
      },
      {
        x: "train",
        y: 211,
      },
      {
        x: "subway",
        y: 195,
      },
      {
        x: "bus",
        y: 242,
      },
      {
        x: "car",
        y: 214,
      },
      {
        x: "moto",
        y: 66,
      },
      {
        x: "bicycle",
        y: 248,
      },
      {
        x: "horse",
        y: 232,
      },
      {
        x: "skateboard",
        y: 292,
      },
      {
        x: "others",
        y: 278,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(347, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 129,
      },
      {
        x: "helicopter",
        y: 216,
      },
      {
        x: "boat",
        y: 112,
      },
      {
        x: "train",
        y: 260,
      },
      {
        x: "subway",
        y: 298,
      },
      {
        x: "bus",
        y: 245,
      },
      {
        x: "car",
        y: 103,
      },
      {
        x: "moto",
        y: 44,
      },
      {
        x: "bicycle",
        y: 246,
      },
      {
        x: "horse",
        y: 84,
      },
      {
        x: "skateboard",
        y: 90,
      },
      {
        x: "others",
        y: 256,
      },
    ],
  },
];

const Line = () => (
  <div className="h-[30rem]">
    <ResponsiveLine
      data={lineDate}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
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
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      pointSize={8}
      pointColor={{ theme: "background" }}
      pointBorderWidth={1}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 17,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  </div>
);

export default Line;
