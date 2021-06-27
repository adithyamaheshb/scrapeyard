import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { formatDistance } from "date-fns";

export default class Example extends PureComponent {
  render() {
    const scrapesWithDates = this.props.scrapes.map((scrape, index) => {
      return {
        ...scrape,
        date: formatDistance(new Date(scrape.date), new Date()),
      };
    });
    return (
      <LineChart
        width={1000}
        height={500}
        data={scrapesWithDates}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis domain={["dataMin", "dataMax"]} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="count"
          stroke="#8884d8"
          activeDot={{
            r: 8,
          }}
        />{" "}
        // <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    );
  }
}
