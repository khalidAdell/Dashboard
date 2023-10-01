import React from "react";
import { ResponsivePie } from "@nivo/pie";
export const pieData = [
  {
    id: "php",
    label: "php",
    value: 168,
    color: "hsl(25, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 498,
    color: "hsl(337, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 74,
    color: "hsl(56, 70%, 50%)",
  },
  {
    id: "erlang",
    label: "erlang",
    value: 497,
    color: "hsl(303, 70%, 50%)",
  },
  {
    id: "javascript",
    label: "javascript",
    value: 592,
    color: "hsl(74, 70%, 50%)",
  },
];
const Pie = () => {
  return <div className="h-[40rem]">
    <ResponsivePie
        data={pieData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={1}
        colors={{ scheme: 'blues' }}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
  </div>;
};

export default Pie;
