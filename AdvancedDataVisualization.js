/*
   Filename: AdvancedDataVisualization.js
   Content: Advanced data visualization using D3.js library
*/

// Import required libraries
import * as d3 from 'd3';

// Define the dimensions and margins for the visualization
const margin = { top: 50, right: 50, bottom: 50, left: 50 };
const width = 800 - margin.left - margin.right;
const height = 600 - margin.top - margin.bottom;

// Create the SVG container
const svg = d3.select('body')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`);

// Load data from a CSV file
d3.csv('data.csv').then((data) => {
  // Convert data types if necessary
  data.forEach((d) => {
    d.value = +d.value;
  });

  // Define scales for x and y axes
  const xScale = d3.scaleBand()
    .domain(data.map((d) => d.label))
    .range([0, width])
    .padding(0.1);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, (d) => d.value)])
    .range([height, 0]);

  // Create x and y axes
  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);

  svg.append('g')
    .attr('class', 'x-axis')
    .attr('transform', `translate(0, ${height})`)
    .call(xAxis);

  svg.append('g')
    .attr('class', 'y-axis')
    .call(yAxis);

  // Create bars for each data point
  svg.selectAll('.bar')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', (d) => xScale(d.label))
    .attr('y', (d) => yScale(d.value))
    .attr('width', xScale.bandwidth())
    .attr('height', (d) => height - yScale(d.value))
    .style('fill', 'steelblue');
    
  // Add tooltips to the bars
  const tooltip = d3.select('body')
    .append('div')
    .attr('class', 'tooltip')
    .style('opacity', 0);

  svg.selectAll('.bar')
    .on('mouseover', (d) => {
      tooltip.transition()
        .duration(200)
        .style('opacity', 0.9);
      tooltip.html(`Label: ${d.label}<br>Value: ${d.value}`)
        .style('left', `${d3.event.pageX}px`)
        .style('top', `${d3.event.pageY - 28}px`);
    })
    .on('mouseout', () => {
      tooltip.transition()
        .duration(500)
        .style('opacity', 0);
    });
});

// Add a title to the visualization
svg.append('text')
  .attr('x', width / 2)
  .attr('y', -20)
  .attr('text-anchor', 'middle')
  .text('Advanced Data Visualization');

// Add a legend
const legend = svg.selectAll('.legend')
  .data(['Value'])
  .enter()
  .append('g')
  .attr('class', 'legend')
  .attr('transform', (_, i) => `translate(0, ${height + margin.bottom / 2 + i * 20})`);

legend.append('rect')
  .attr('x', width - 18)
  .attr('width', 18)
  .attr('height', 18)
  .style('fill', 'steelblue');

legend.append('text')
  .attr('x', width - 24)
  .attr('y', 9)
  .attr('dy', '0.35em')
  .style('text-anchor', 'end')
  .text((d) => d);