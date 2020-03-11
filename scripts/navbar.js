d3.select('.dropdown')
  .on("mouseover", function(){
    d3.select('.dropdown-content')
      .classed('visible',true);
})
  .on("mouseout", function(){
    d3.select('.dropdown-content')
      .classed('visible',false);
});

d3.select('.clone')//.select('p.title')
  .on("mouseover", function(){
    d3.select('.clone').select('.dropdown-content')
      .classed('visible',true)
})
  .on("mouseout", function(){
    d3.select('.clone').select('.dropdown-content')
    .classed('visible',false);
});