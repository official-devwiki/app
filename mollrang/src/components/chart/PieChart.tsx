import * as d3 from "d3";
import React, { ReactElement, useEffect } from "react";
import styled from "styled-components";

interface Props {
  radius?: number;
  data: any;
}

const ChartLayout = styled.div`
  height: auto;
  min-height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PieChart = (props: Props): ReactElement => {
  const { radius, data: chartData } = props;

  useEffect(() => {
    if (chartData) drawChart();
  }, [chartData]);

  const drawChart = () => {
    const svgDimensions = {
      width: 300,
      height: 300,
    };
    const radius = Math.min(svgDimensions.width, svgDimensions.height) / 2;

    const data: any[] = [
      { number: chartData["challenge1"], name: "1 번째 시도" },
      { number: chartData["challenge2"], name: "2 번째 시도" },
      {
        number: chartData["challenge3"],
        name: "3 번째 시도",
      },
      { number: chartData["challenge4"], name: "4 번째 시도" },
      { number: chartData["challenge5"], name: "5 번째 시도" },
    ];

    // 이전 차트 삭제
    d3.select("#chart").select("svg").remove();

    const svg = d3
      .select("#chart")
      .append("svg")
      .attr("width", svgDimensions.width)
      .attr("height", svgDimensions.height);

    const g = svg
      .append("g")
      .attr(
        "transform",
        `translate(${svgDimensions.width / 2}, ${svgDimensions.height / 2})`,
      );
    const color = d3.scaleOrdinal([
      "#fbe38c",
      "#FFE588",
      "#fce9a6",
      "#ffefb3",
      "#fff4cd",
    ]);
    const pie = d3.pie().padAngle(0.1);
    const arc: any = d3
      .arc()
      .innerRadius(radius - 50)
      .outerRadius(radius)
      .cornerRadius(4);

    const arcs = g
      .selectAll("arc")
      .data(pie.value((d: any) => d.number)(data))
      .enter()
      .append("g")

      .attr("class", "arc")
      .on("mouseover", onMouseOver)
      .on("mouseout", onMouseOut);

    arcs
      .append("path")
      .attr("fill", (d, i) => color(String(i)))
      .attr("d", arc);

    arcs
      .append("text")
      .attr("transform", (d) => `translate(${arc.centroid(d)})`)
      .text((d) => d.value)
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      .attr("fill", "#fff")
      .attr("text-anchor", "middle")
      .attr("display", "none");

    arcs
      .append("text")
      .attr(
        "transform",
        (d) =>
          `translate(${d3.arc().innerRadius(100).outerRadius(70).centroid(d)})`,
      )
      .text((d) => d.data.name)
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      .attr("fill", "#222")
      .attr("text-anchor", "middle");

    function onMouseOut(d: any, i: any) {
      d3.select(this)
        .select("path")
        .transition()
        .duration(200)
        .style("fill", color(i));
      d3.select(this).select("text").attr("display", "none");
    }

    function onMouseOver(d: any, i: any) {
      d3.select(this)
        .select("path")
        .transition()
        .duration(200)
        .style("fill", "var(--primary)");
      d3.select(this).select("text").attr("display", "block");
    }
  };

  return (
    <ChartLayout>
      <div id={"chart"} />
    </ChartLayout>
  );
};
