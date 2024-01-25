'use client'

import {useRef, useEffect} from 'react';
import * as d3 from 'd3';
import {useTheme} from 'next-themes';

var json = {
  nodes: [
    {name: 'twitter', image: '/images/twitter.ico', url: 'http://twitter.com/truesquared'},
    {name: 'github', image: '/images/github.ico', url: 'http://github.com/aierus'},
    {name: 'linkedin', image: '/images/linkedin.ico', url: 'https://www.linkedin.com/in/andy-clark3/'},
    {name: 'facebook', image: '/images/facebook.ico', url: 'https://www.facebook.com/andy.clark.507027/'},
    {name: 'boston college', image: '/images/bcw.png', url: 'https://www.bc.edu/'},
    {name: 'resume', image: '/images/laptop.png', url: 'https://www.andyrclark.com/resume'},
    {name: 'website', image: '/images/dc.png', url: 'https://www.andyrclark.com/'},
    {name: 'goodreads', image: '/images/goodreads.ico', url: 'https://www.goodreads.com/user/show/134331947-andy-clark'}
  ],
  links: [
    {source: 1, target: 5, value: 1},
    {source: 2, target: 3, value: 1},
    {source: 3, target: 2, value: 6},
    {source: 1, target: 0, value: 4},
    {source: 2, target: 4, value: 2},
    {source: 2, target: 1, value: 2},
    {source: 0, target: 6, value: 5},
    {source: 1, target: 7, value: 5}

  ]
}

var height = 300
var width = 500

const Graph = () => {
  const graphRef = useRef(null);
  const {theme, setTheme} = useTheme();

  useEffect(() => {
    const svg = d3.select(graphRef.current),
      link = svg.selectAll(".link")
        .data(json.links)
        .join("line")
        .classed("link", true),
      node = svg.selectAll(".node")
        .data(json.nodes)
        .enter().append("g")
        .attr("class", "node")
        .on('dblclick', function (d, i) {
          window.open(i.url);
        })
        .classed("node", true)

    node.append('text')
      .attr("dx", 12)
      .attr("dy", ".35em")
      .attr("fill", "#3A505C")
      .text(function (d) {return d.name});

    node.append("image")
      .attr("xlink:href", function (d) {return d.image})
      .attr("x", -8)
      .attr("y", -8)
      .attr("width", 16)
      .attr("height", 16);


    const simulation = d3.forceSimulation()
      .nodes(json.nodes)
      .force('x', d3.forceX(width / 2).strength(0.05))
      .force('y', d3.forceY(height / 2).strength(0.05))
      .force("charge", d3.forceManyBody().strength(-25))
      .force("link", d3.forceLink(json.links).distance(120).strength(.75))
      .on("tick", tick);


    const drag = d3.drag()
      // .on("start", dragstart)
      .on("drag", dragged);

    node.call(drag).on("click", click);

    function tick() {
      link.attr("x1", function (d) {return d.source.x;})
        .attr("y1", function (d) {return d.source.y;})
        .attr("x2", function (d) {return d.target.x;})
        .attr("y2", function (d) {return d.target.y;});

      node.attr("transform", function (d) {return "translate(" + d.x + "," + d.y + ")";});
    }

    function click(event, d) {
      delete d.fx;
      delete d.fy;
      d3.select(this).classed("fixed", false);
      simulation.alpha(1).restart();
    }

    function dragstart(event) {
      // d3.select(this).classed("fixed", true); 
    }

    function dragged(event, d) {
      d.x = clamp(event.x, 0, width);
      d.y = clamp(event.y, 0, height);
      simulation.alpha(1).restart();
    }

    function clamp(x, lo, hi) {
      return x < lo ? lo : x > hi ? hi : x;
    }

    function color() {
      return theme === 'dark' ? 'white' : 'black';
    }

  })

  return <svg ref={graphRef} width="500" height="300" viewBox="0 0 600 350"></svg>;
}

export default Graph;
