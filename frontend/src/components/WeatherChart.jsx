import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function WeatherChart({ data }) {
  return (
    <ResponsiveContainer width={"800"} height={"500"}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray={"3 3"} />
        <XAxis dataKey="day" />
        {/* <YAxis width={"auto"} dataKey="high" /> */}
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Line yAxisId="left" dataKey="temp" name="Temperature" />
        <Line
          yAxisId="right"
          dataKey="condition"
          stroke="#3b82f6"
          name="Condition"
        />
        <Tooltip contentStyle={{ backgroundColor: "black" }} />
        <Legend />
        {/* Temperature */}
        {/* <Line
          type="monotone"
          dataKey="temp"
          strokeWidth={3}
          name="Temperature (°F)"
        /> */}
        {/* Feels Like */}
        <Line
          type="monotone"
          dataKey="feelsLike"
          stroke="#f97316"
          strokeWidth={2}
          name="Feels Like (°F)"
        />
        {/* Condition */}
        {/* <Line
          type="monotone"
          dataKey="condition"
          stroke="#3b82f6"
          strokeWidth={2}
          name="Condition"
        /> */}
        {/* Precipitation */}
        <Line
          type="monotone"
          dataKey="precipitation"
          stroke="#22c55e"
          strokeWidth={2}
          name="Precipitation"
        />
        {/* i don't have any questions */}
      </LineChart>
    </ResponsiveContainer>
  );
}
export default WeatherChart;
