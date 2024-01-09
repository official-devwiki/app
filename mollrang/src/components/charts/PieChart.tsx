import React, {ReactElement} from "react";
import {ResponsivePie} from "@nivo/pie";
import styled from "styled-components";
import useTheme from "@hooks/useTheme";

export interface PieChartProps {
  id: string;
  label: string;
  value: number;
  color: string;
}

const ChartWrapper = styled.article`
  width: 100%;
  height: 70vw;
  max-height: 400px;
`;

type DataType = { data: PieChartProps[] };

const PieChart = React.forwardRef(
  (
    {data}: DataType,
    ref: React.ForwardedRef<HTMLDivElement>,
  ): ReactElement => {
    const {isDarkMode} = useTheme();
    const color = isDarkMode ? '#fff' : '#222';

    return (
      <ChartWrapper ref={ref}>
        <ResponsivePie
          data={data}
          animate={false}
          isInteractive={true}
          margin={{top: 40, right: 80, bottom: 80, left: 80}}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          colors={{scheme: "green_blue"}}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 1]],
          }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor={color}
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{from: "color"}}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          legends={[
            {
              anchor: "left",
              direction: "column",
              justify: false,
              translateX: -65,
              translateY: 5,
              itemsSpacing: 8,
              itemWidth: 50,
              itemHeight: 18,
              itemTextColor: 'var(--textDefault)',
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 15,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}
          activeId={'pie-chart'}/>
      </ChartWrapper>
    );
  },
);
PieChart.displayName = "PieChart";
export default PieChart;
