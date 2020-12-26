
let url = 'https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json';

const height = 1000;
const width = 1500;
let color = d3.scale.category10()
const canvas = d3.select('body').append('svg')
.attr('width',width)
.attr('height',height);
d3.json(url,function(data){
  let treemap = d3.layout.treemap()
      .size([width,height])
      .nodes(data)
      console.log(treemap)
  let cells = canvas.selectAll('.cell')
  .data(treemap)
  .enter()
  .append('g')
  .attr('class','cell')
cells.append('rect')
  .attr('x',(d) => d.x)
  .attr('y',d => d.y)
  .attr('width', d => d.dx)
  .attr('height',d => d.dy)
  .attr('fill',d => d.children ? null : color(d.parent.name))
  .attr('stroke','#fff')
cells.append('text')
  .attr('x', d => d.x + d.dx/2)
  .attr('y', d => d.y + d.dy/2)
  .attr('text-anchor','middle')
  .text(d => d.children ? null :d.name)
})
