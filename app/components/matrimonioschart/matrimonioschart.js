import React, { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3'; // Import D3.js;
import { csvParse } from 'd3';
import { timeParse } from 'd3';
import "./matrimonioschart.css";

const Matirmonioschart = () => {
    const svgRef = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const svg = d3.select(svgRef.current);
            const margin = { top: 20, right: 0, bottom: 30, left: 50 };
            const width = +svg.attr("width") - margin.left - margin.right - 20;
            const height = +svg.attr("height") - margin.top - margin.bottom;
            const g = svg.append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            const parseTime = timeParse("%Y");


            const x = d3.scaleTime().rangeRound([0, width - 150]);
            const y = d3.scaleLinear().rangeRound([height, 70]);
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

                    const chartData = data;

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
                        .call(d3.axisBottom(x));

                    var imageElements = [];
                    const areaChartElement = svgRef.current;



                    function updateValueLabel() {
                        g.selectAll(".value-label").remove();
                        g.selectAll(".value-image").remove();
                        var initialYear = parseTime("2010");
                        var yearsToDisplay = currentIndex + 1;
                        var newData = chartData.slice(0, yearsToDisplay);


                        if (
                            newData.length > 0 &&
                            newData[newData.length - 1].value !== 0 &&
                            !isNaN(newData[newData.length - 1].value)
                        ) {


                            g.append("text")
                                .attr("class", "value-label")
                                .attr("x", x(newData[newData.length - 1].year) + 80) // Adjust the x-position as needed
                                .attr("y", y(newData[newData.length - 1].value)) // Use the last data point for the y-position
                                .text(`${newData[newData.length - 1].value.toLocaleString()}`)
                                .attr("fill", "#3E3E3E")
                                .attr("font-size", "15px");
                            g.append("image")
                                .attr("class", "value-image")
                                .attr("x", x(newData[newData.length - 1].year)) // Adjust the x-position as needed
                                .attr("y", y(newData[newData.length - 1].value + 120)) // Adjust the y-position to position the image above the text
                                .attr("width", 100) // Set the width of the image
                                .attr("height", 70) // Set the height of the image
                                .attr("xlink:href", "./boys.png");
                        }

                        g.append("text")
                            .attr("class", "value-label")
                            .attr("x", x(newData[newData.length - 1].year) + 80) // Adjust the x-position as needed
                            .attr("y", y(newData[newData.length - 1].uc)) // Use the last data point for the y-position
                            .text(`${newData[newData.length - 1].uc.toLocaleString()}`)
                            .attr("fill", "#3E3E3E")
                            .attr("font-size", "15px");

                        g.append("image")
                            .attr("class", "value-image")
                            .attr("x", x(newData[newData.length - 1].year)) // Adjust the x-position as needed
                            .attr("y", y(newData[newData.length - 1].uc + 120)) // Adjust the y-position to position the image above the text
                            .attr("width", 100) // Set the width of the image
                            .attr("height", 70) // Set the height of the image
                            .attr("xlink:href", "./brides.png");
                    }


                    function updateChart() {
                        currentIndex++;
                        if (currentIndex >= chartData.length) {
                            currentIndex = chartData.length - 1;
                        }

                        d3.selectAll(".line.hidden-lines").classed("hidden-lines", false);
                        d3.selectAll(".uc-line.hidden-lines").classed("hidden-lines", false);


                        var initialYear = parseTime("2010");
                        var yearsToDisplay = currentIndex + 1;


                        // Update the data for both the area and line charts

                        var newData = chartData.slice(0, yearsToDisplay);
                        x.domain(d3.extent(data, function (d) { return d.year; }));
                        y.domain([0, d3.max(data, function (d) { return d.value; })]);
                        ucY.domain([0, d3.max(data, function (d) { return d.value; })]);

                        // Update the area and line chart paths

                        if (
                            newData.length > 0 &&
                            newData[newData.length - 1].value !== 0 &&
                            !isNaN(newData[newData.length - 1].value)
                        ) {

                            g.select(".line")
                            .style("display", "block")                            
                            .datum(newData)
                            .attr("d", line);
                      
                          g.select(".uc-line")
                            .style("display", "block")
                            .attr("stroke", "rgba(0,0,0,0.3)")
                            .datum(newData)
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


                    function backChart() {
                        // Increment the currentIndex to show the next year's data
                        currentIndex--;
                        if (currentIndex < 0) {
                            currentIndex = 0;
                        }

                        d3.selectAll(".line,.uc-line")
                            .style("display", "block");

                        // Update the data for both the area and line charts

                        var newData = chartData.slice(0, currentIndex);
                        x.domain(d3.extent(data, function (d) { return d.year; }));
                        y.domain([0, d3.max(data, function (d) { return d.value; })]);
                        ucY.domain([0, d3.max(data, function (d) { return d.value; })]);

                        // Update the area and line chart paths
                        g.select(".line")
                            .datum(newData)
                            .attr("d", line);

                        // UC Line chart
                        g.select(".uc-line")
                            .datum(newData)
                            .attr("d", ucLine);

                        g.selectAll(".value-image").remove();

                        updateValueLabel();
                    }


                    const handleScroll = (event) => {
                        
                        if (event.deltaY > 0) {
                            // Scroll down, advance one year
                            updateChart();
                        } else if (event.deltaY < 0 && currentIndex > 0) {
                            backChart();
                        }
                        d3.selectAll(".line.hidden-lines").classed("hidden-lines", false);
                        d3.selectAll(".uc-line.hidden-lines").classed("hidden-lines", false);
                    };

                    // Attach scroll event listener to the component's DOM element
                    areaChartElement.addEventListener("wheel", handleScroll);

                    return () => {
                        // Remove the event listener when the component unmounts
                        areaChartElement.removeEventListener("wheel", handleScroll);
                    };

                } catch (error) {
                    console.error('Error loading/parsing data:', error);
                }
            };

            loadData();
        }
    }, []);
    return (
        <div className="matrimonios-chart">
            <svg ref={svgRef} width={900} height={550}>

            </svg>
        </div>
    );
}
export default Matirmonioschart;