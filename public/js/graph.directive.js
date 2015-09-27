angular.module( 'app').directive( 'dgraph', [
  function () {
    return {
      restrict: 'E',
      scope: {
        data: '=',
        colors: '=',
        dollars: '=',
          categories: '=',
          barid: '@'
      },
      link: function (scope, element,attr) {
          
       
           

var grid = d3.range(25).map(function(i){
			return {'x1':0,'y1':0,'x2':0,'y2':90};
		});

		var tickVals = grid.map(function(d,i){
			if(i>0){ return i*10; }
			else if(i===0){ return "100";}
		});

		var xscale = d3.scale.linear()
						.domain([0,150])
						.range([0,2]);

		var yscale = d3.scale.linear()
						.domain([0,scope.categories.length])
						.range([10,100]);
		var colorScale = d3.scale.quantize()
						.domain([0,scope.categories.length])
						.range(scope.colors);
        //Render graph based on 'data'
          scope.create = function(colors,dollars,categories,id) {
                      
		var canvas = d3.select("#" +id)
						.append('svg')
						.attr({'width':400,'height':75});
          		var grids = canvas.append('g')
						  .attr('id','grid'+id)
						  .attr('transform','translate(150,10)')
						  .selectAll('line')
						  .data(grid)
						  .enter()
						  .append('line')
						  .attr({'x1':function(d,i){ return i*30; },
								 'y1':function(d){ return d.y1; },
								 'x2':function(d,i){ return i*30; },
								 'y2':function(d){ return d.y2; },
							})
						  .style({'stroke':'#adadad','stroke-width':'1px'});

		var	xAxis = d3.svg.axis();
			xAxis
				.orient('bottom')
				.scale(xscale)
				.tickValues(tickVals);

		var	yAxis = d3.svg.axis();
			yAxis
				.orient('left')
				.scale(yscale)
				.tickSize(2)
				.tickFormat(function(d,i){ return categories[i]; })
				.tickValues(d3.range(17));

		var y_xis = canvas.append('g')
						  .attr("transform", "translate(150,0)")
						  .attr('id','yaxis'+id)
						  .call(yAxis);

		var x_xis = canvas.append('g')
						  .attr("transform", "translate(150,480)")
						  .attr('id','xaxis'+id)
						  .call(xAxis);

		
            var chart = canvas.append('g')
							.attr("transform", "translate(150,0)")
							.attr('id',id+"g").attr('class',id+"g")
							.selectAll('rect')
							.data(dollars)
							.enter()
							.append('rect').attr('id',id+"bars").attr('class',id+"bars")
							.attr('height',19)
							.attr({'x':0,'y':function(d,i){ return yscale(i)+0; }})
							.style('fill',function(d,i){ return colorScale(i); })
							.attr('width',function(d){ return 0; });
      }
		
        scope.render = function(colors,dollars,categories,id) {
           
var transit =  d3.select("."+id+"g").selectAll("rect")
						    .data(dollars)
						    .transition()
						  
						    .attr("width", function(d) {return xscale(d); });
            
            
		var transitext = d3.select('#'+id+"bar")
							.selectAll('text')
							.data(dollars)
							.enter()
							.append('text')
							.attr({'x':function(d) {return xscale(d)-200; },'y':function(d,i){ return yscale(i)+35; }})
							.text(function(d){ return d+"$"; }).style({'fill':'#fff','font-size':'14px'});

        };

         //Watch 'data' and run scope.render(newVal) whenever it changes
         //Use true for 'objectEquality' property so comparisons are done on equality and not reference
          scope.$watch('dollars', function(){
             
              scope.render(scope.colors,scope.dollars,scope.categories,scope.barid);
          }, true);  
        
           scope.$watch('barid', function(){
              
              
               if(scope.barid != 'item.graphId'){
                  
              scope.create(scope.colors,scope.dollars,scope.categories,scope.barid);
               }
          }, true); 
        }
    };
  }
]);