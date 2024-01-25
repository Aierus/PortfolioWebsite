'use client'

import React, {useEffect, useRef} from 'react';
import * as d3 from 'd3';

const BarChart = ({data}) => {
  const chartRef = useRef(null);

  useEffect(() => {
    // D3 code goes here
    const svg = d3.select(chartRef.current);

    // Data Join
    const bars = svg.selectAll('rect').data(data);

    // Enter
    bars
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 30)
      .attr('y', (d) => 100 - d)
      .attr('width', 25)
      .attr('height', (d) => d)
      .attr('fill', 'blue');

    // Update
    bars
      .attr('y', (d) => 100 - d)
      .attr('height', (d) => d);

    // Exit
    bars.exit().remove();
  }, [data]);

  return <svg ref={chartRef} width={300} height={100}></svg>;
};

export default BarChart;

