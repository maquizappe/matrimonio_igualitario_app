import React, { useEffect, useState,useRef  } from 'react';
import * as d3 from 'd3'; // Import D3.js;
import { interpolate } from 'd3';
import { csvParse } from 'd3';
import { timeParse } from 'd3';
import "./ringschart.css";

const AreaChart_2 = () => {
    const svgRef = useRef(null);
    const chartDataRef = useRef(null);
    const imageElements = []; 


    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {
              if (entries[0].isIntersecting) {

        if (typeof window !== 'undefined') {
        const svg = d3.select(svgRef.current);
        const margin = { top: 20, right: 0, bottom: 30, left: 50 };
        const width = +svg.attr('width') - margin.left - margin.right;
        const height = +svg.attr('height') - margin.top - margin.bottom;
        const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);
    
        const parseTime = timeParse('%Y');

        const x = d3.scaleTime().rangeRound([0, width - 170]);
        const y = d3.scaleLinear().rangeRound([height, +10]);
        const ucY = d3.scaleLinear().rangeRound([height, 0]);

        const line = d3
        .line()
        .x((d) => x(d.year))
        .y((d) => y(d.value))
        .curve(d3.curveCatmullRom.alpha(0.5));

        const ucLine = d3
        .line()
        .x((d) => x(d.year))
        .y((d) => ucY(d.uc))
        .curve(d3.curveNatural);


var currentIndex = 0; // Keeps track of the current year's index in your data

const loadData = async () => {
    try {
        const data = await d3.csv('./data.csv', (d) => ({
          year: parseTime(d.year),
          value: d.value !== '' ? +d.value : 0,
          uc: +d.uc,
        }));
  
        // Store the data in a variable for easy access
        chartDataRef.current = data;

      x.domain(d3.extent(data, (d) => d.year));
      y.domain([0, d3.max(data, (d) => d.value)]);
      ucY.domain([0, d3.max(data, (d) => d.value)]);

    // Line chart
    g.append("path")
        .attr("class", "line hidden-lines")
        .attr("fill", "none")
        .attr("stroke", "#000000")
        .attr("stroke-width", "0.3px")
        .attr("d", line(data))



    // UC Line chart
    g.append("path")
        .attr("class", "uc-line hidden-lines")
        .attr("fill", "none")
        .attr("stroke", "#000000")
        .attr("stroke-width", "0.5px")
        .attr("stroke-dasharray", "5,5")
        .attr("d", ucLine(data))


    // X axis
    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .attr("class", "x-axis")
        .attr("stroke-width", "0.2px")
        .call(
            d3
              .axisBottom(x)
              .tickSizeOuter(0) // Optional: Remove outer ticks
          )
          .selectAll('text') // Select all the text elements for styling
          .style('font-size', '7px')
          .style('color', 'grey');


        updateChart(); // Trigger the initial animation


        

        const interval = setInterval(() => {
          updateChart();
        }, 300); // Adjust the interval as needed

        return () => clearInterval(interval);

      } catch (error) {
        console.error('Error loading/parsing data:', error);
      }
    };


 
    const updateValueLabel= () => {
        // Remove the previous "Value" label
        g.selectAll(".value-label").remove();
        g.selectAll(".value-image").remove();
        // Define the initial year and the number of years to display
        var initialYear = parseTime("2010");
        var yearsToDisplay = currentIndex + 1; // Increase the number of years displayed with each scroll
        var newData = chartDataRef.current.slice(0, yearsToDisplay);
        // Add the "Value" label for the last year shown


        if (
            newData.length > 0 &&
            newData[newData.length - 1].value !== 0 &&
            !isNaN(newData[newData.length - 1].value)
        ) {
            // Add the "Value" label for the last year shown
            g.append("text")
                .attr("class", "value-label")
                .attr("x", x(newData[newData.length - 1].year) + 20) // Adjust the x-position as needed
                .attr("y", y(newData[newData.length - 1].value)) // Use the last data point for the y-position
                .text(`Matrimonios: ${newData[newData.length - 1].value.toLocaleString()}`)
                .attr("fill", "#3E3E3E")
                .attr("font-size", "8px");


            g.append("text")
                .attr("class", "value-label")
                .attr("x", x(newData[newData.length - 1].year)+10) // Adjust the x-position as needed
                .attr("y", y(newData[newData.length - 1].uc)) // Use the last data point for the y-position
                .text(`Uniones civiles: ${newData[newData.length - 1].uc.toLocaleString()}`)
                .attr("fill", "#3E3E3E")
                .attr("font-size", "8px");

            // Add image elements for each year in newData
            newData.forEach(function (d) {
                if (d.value !== 0) {
                    var imageX = x(d.year) -10; // Adjust the x-position as needed
                    var imageY = y(d.value) -5; // Adjust the y-position to position the image above the text
                    var image = g.append("image")
                        .attr("class", "value-image")
                        .attr("x", imageX)
                        .attr("y", imageY)
                        .attr("width", 30)
                        .attr("height", 10)
                        .attr("xlink:href", "./ring.png");

                    // Push the image element to the array
                    imageElements.push(image);
                }
            });
        } else {
            g.append("text")
                .attr("class", "value-label")
                .attr("x", x(newData[newData.length - 1].year) + 10) // Adjust the x-position as needed
                .attr("y", y(newData[newData.length - 1].uc)) // Use the last data point for the y-position
                .text(`Uniones civiles: ${newData[newData.length - 1].uc.toLocaleString()}`)
                .attr("fill", "#3E3E3E")
                .attr("font-size", "8px");
        }

    }


    // Function to update the chart data and year
    const updateChart = () => {
        // Increment the currentIndex to show the next year's data
        currentIndex++;
        if (currentIndex >= chartDataRef.current.length) {
          currentIndex = chartDataRef.current.length - 1;
        }
        d3.selectAll('.uc-line').style('display', 'block');
      
        // Define the initial year and the number of years to display
        var initialYear = parseTime('2010');
        var yearsToDisplay = currentIndex + 1; // Increase the number of years displayed with each scroll
      
        // Update the data for both the area and line charts
        var newData = chartDataRef.current.slice(0, yearsToDisplay);
        x.domain(d3.extent(chartDataRef.current, function (d) { return d.year; }));
        y.domain([0, d3.max(chartDataRef.current, function (d) { return d.value; })]);
        ucY.domain([0, d3.max(chartDataRef.current, function (d) { return d.value; })]);
      
        // Update the area and line chart paths
        if (
          newData.length > 0 &&
          newData[newData.length - 1].value !== 0 &&
          !isNaN(newData[newData.length - 1].value)
        ) {
          g.select('.line')
            .style('display', 'block')
            .datum(newData)
            .transition() // Add transition
            .ease(d3.easeLinear)
            .duration(100)
            .attr('d', line); // Update the path
      
          if (newData[newData.length - 1].value !== 0) {
            g.select('.value-image').style('display', 'block');
          } else {
            g.select('.value-image').style('display', 'none');
          }
        } else {
          // If the condition is not met, hide the area and line
          g.select('.area').style('display', 'none');
          g.select('.line').style('display', 'none');
        }
      
        // UC Line chart
        g.select('.uc-line')
        .datum(newData)
        .transition()
        .ease(d3.easeLinear)
        .duration(100) // Adjust the duration as needed for a smoother transition
        .attr('d', ucLine);
      
        updateValueLabel();
      };
      
      

  
// Call the loadData function to start loading and processing the data
loadData(); 


}observer.disconnect();
}
            },
{ threshold: 0.5 } // Adjust the threshold as needed
);

observer.observe(svgRef.current);

// Cleanup the observer when the component unmounts
return () => {
observer.disconnect();
};
}, []);
return (
    <div className="area-chart">
      <svg ref={svgRef} width={450} height={230}>
        
      </svg>
    </div>
  );
};

export default AreaChart_2;