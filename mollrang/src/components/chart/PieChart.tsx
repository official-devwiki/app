import * as d3 from 'd3';
import {ReactElement, useEffect} from 'react';
import styled from 'styled-components';

interface Props {
  radius?: number;
}

const ChartLayout = styled.div`
  width: 100%;
  text-align: center;
`;

export const PieChart = (props: Props): ReactElement => {

  useEffect(() => {
    drawChart();
  }, []);
  const drawChart = () => {
    const svgDimensions = {
      width: 300,
      height: 300,
    };
    const radius = Math.min(svgDimensions.width, svgDimensions.height) / 2;
    const data = [{'number': 4, 'name': 'Locke'}, {'number': 4, 'name': 'Locke'}, {
      'number': 4,
      'name': 'Locke',
    }, {'number': 4, 'name': 'Locke'}];

    const svg = d3
      .select('#chart')
      .append('svg')
      .attr('width', svgDimensions.width)
      .attr('height', svgDimensions.height);

    const g = svg
      .append('g')
      .attr(
        'transform',
        `translate(${svgDimensions.width / 2}, ${svgDimensions.height / 2})`,
      );
    const color = d3.scaleOrdinal([
      '#ff9800',
      '#ffa726',
      '#ffb74d',
      '#ffcc80',
      '#ffe0b2',
      '#fff3e0',
    ]);
    const pie = d3.pie();
    const arc = d3.arc().innerRadius(radius - 50).outerRadius(radius).cornerRadius(4);
    const arcs = g
      .selectAll('arc')
      .data(pie.value((d: any) => d.number)(data))
      .enter()
      .append('g')
      .attr('class', 'arc')
      .on('mouseover', onMouseOver)
      .on('mouseout', onMouseOut);

    arcs
      .append('path')
      .attr('fill', (d, i) => color(i))
      .attr('d', arc);

    arcs
      .append('text')
      .attr('transform', (d) => `translate(${arc.centroid(d)})`)
      .text((d) => d.value)
      .attr('font-family', 'sans-serif')
      .attr('font-size', '18px')
      .attr('font-weight', 'bold')
      .attr('fill', '#fff')
      .attr('text-anchor', 'middle')
      .attr('display', 'none');

    function onMouseOut(d, i) {
      d3.select(this)
        .select('path')
        .transition()
        .duration(200)
        .style('fill', color(i));
      d3.select(this).select('text').attr('display', 'none');
    }

    function onMouseOver(d, i) {
      d3.select(this)
        .select('path')
        .transition()
        .duration(200)
        .style('fill', '#e65100');
      d3.select(this).select('text').attr('display', 'block');
    }
  };

  return (
    <ChartLayout>
      <div id={'chart'} />
    </ChartLayout>
  );
};
