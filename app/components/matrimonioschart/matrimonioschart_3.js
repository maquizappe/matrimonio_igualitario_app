import React, { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3'; // Import D3.js;
import { csvParse } from 'd3';
import { timeParse } from 'd3';
import "./matrimonioschart.css";

const Matirmonioschart_2 = () => {
    const svgRef = useRef(null);
    var imageElements = [];
    const chartDataRef = useRef(null);

    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {
              if (entries[0].isIntersecting) {

        if (typeof window !== 'undefined') {
            const svg = d3.select(svgRef.current);
            const margin = { top: 20, right: 0, bottom: 30, left: 50 };
            const width = +svg.attr("width") - margin.left - margin.right;
            const height = +svg.attr("height") - margin.top - margin.bottom;
            const g = svg.append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            const parseTime = timeParse("%Y");


            const x = d3.scaleTime().rangeRound([0, width - 170]);
            const y = d3.scaleLinear().rangeRound([height, +10]);
            const ucY = d3.scaleLinear().rangeRound([height, 0]);


            const line = d3.line()
                .x((d) => x(d.year))
                .y((d) => y(d.value))
                .curve(d3.curveCatmullRom.alpha(0.5));


            const ucLine = d3.line()
                .x((d) => x(d.year))
                .y((d) => ucY(d.uc))
                .curve(d3.curveNatural);


            var currentIndex = 0;


            const loadData = async () => {
                try {
                    const data = await d3.csv('./matrimonios.csv', (d) => ({
                        year: parseTime(d.year),
                        value: d.value !== '' ? +d.value : 0,
                        uc: +d.uc,
                    }));

                    chartDataRef.current = data;

                    x.domain(d3.extent(data, (d) => d.year));
                    y.domain([0, d3.max(data, (d) => d.value)]);
                    ucY.domain([0, d3.max(data, (d) => d.value)]);


                    // Line chart
                    g.append("path")
                        .attr("class", "line hidden-lines")
                        .attr("fill", "none")
                        .attr("stroke", "#000000")
                        .attr("stroke-width", "0.5px")
                        .attr("d", line(data))



                    // UC Line chart
                    g.append("path")
                        .attr("class", "uc-line hidden-lines")
                        .attr("fill", "none")
                        .attr("stroke", "rgba(0,0,0,0)")
                        .attr("stroke-width", "1px")
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



                    const interval = setInterval(() => {
                        updateChart();
                    }, 300); // Adjust the interval as needed

                    return () => clearInterval(interval);

                } catch (error) {
                    console.error('Error loading/parsing data:', error);
                }
            };



            function updateValueLabel() {
                g.selectAll(".value-label").remove();
                g.selectAll(".value-image").remove();
                var initialYear = parseTime("2010");
                var yearsToDisplay = currentIndex + 1;
                var newData = chartDataRef.current.slice(0, yearsToDisplay);


                if (
                    newData.length > 0 &&
                    newData[newData.length - 1].value !== 0 &&
                    !isNaN(newData[newData.length - 1].value)
                ) {


                    g.append("text")
                        .attr("class", "value-label")
                        .attr("x", x(newData[newData.length - 1].year) + 30) // Adjust the x-position as needed
                        .attr("y", y(newData[newData.length - 1].value)) // Use the last data point for the y-position
                        .text(`${newData[newData.length - 1].value.toLocaleString()}`)
                        .attr("fill", "#3E3E3E")
                        .attr("font-size", "8px");
                    g.append("image")
                        .attr("class", "value-image")
                        .attr("x", x(newData[newData.length - 1].year)) // Adjust the x-position as needed
                        .attr("y", y(newData[newData.length - 1].value + 90)) // Adjust the y-position to position the image above the text
                        .attr("width", 40) // Set the width of the image
                        .attr("height", 35) // Set the height of the image
                        .attr("xlink:href", "./boys.png");
                }

                g.append("text")
                    .attr("class", "value-label")
                    .attr("x", x(newData[newData.length - 1].year) + 30) // Adjust the x-position as needed
                    .attr("y", y(newData[newData.length - 1].uc)) // Use the last data point for the y-position
                    .text(`${newData[newData.length - 1].uc.toLocaleString()}`)
                    .attr("fill", "#3E3E3E")
                    .attr("font-size", "8px");

                g.append("image")
                    .attr("class", "value-image")
                    .attr("x", x(newData[newData.length - 1].year)) // Adjust the x-position as needed
                    .attr("y", y(newData[newData.length - 1].uc + 50)) // Adjust the y-position to position the image above the text
                    .attr("width", 40) // Set the width of the image
                    .attr("height", 35) // Set the height of the image
                    .attr("xlink:href", "./brides.png");
            }


            function updateChart() {
                currentIndex++;
                if (currentIndex >= chartDataRef.current.length) {
                  currentIndex = chartDataRef.current.length - 1;
                }
              
                d3.selectAll(".line.hidden-lines").classed("hidden-lines", false);
                d3.selectAll(".uc-line.hidden-lines").classed("hidden-lines", false);
              
                var initialYear = parseTime("2010");
                var yearsToDisplay = currentIndex + 1;
              
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
                  g.select(".line")
                    .style("display", "block")
                    .datum(newData)
                    .transition() // Add transition
                    .ease(d3.easeLinear)
                    .duration(500) // Adjust the duration as needed for a smoother transition
                    .attr("d", line);
              
                  g.select(".uc-line")
                    .style("display", "block")
                    .attr("stroke", "rgba(0,0,0,0.3)")
                    .datum(newData)
                    .transition() // Add transition
                    .ease(d3.easeLinear)
                    .duration(500) // Adjust the duration as needed for a smoother transition
                    .attr("d", ucLine);
                } else {
                  // If the condition is not met, hide the area and line
                  g.select(".line , .uc-line").style("display", "none");
                }
              
                // UC Line chart
                g.select(".uc-line")
                  .datum(newData)
                  .attr("d", ucLine);
              
                updateValueLabel();
              }
              
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
    <div className="matrimonios-chart">
        <svg ref={svgRef} width={440} height={230}>

        </svg>
    </div>
);
}
export default Matirmonioschart_2;