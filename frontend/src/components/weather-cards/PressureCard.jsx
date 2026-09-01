import ArcGauge from "../ArcGauge";
import WeatherDetailCard from "../WeatherDetailCard";
import { ArrowDown } from "lucide-react";
import { ArrowUp } from "lucide-react";

function PressureCard({ forecast }) {
  return (
    <WeatherDetailCard title="Pressure">
      <ArcGauge
        value={forecast.current.pressure}
        text=" in"
        label={"Pressure"}
        color={"#52A3FE"}
      />

      <ArrowDown />
      <ArrowUp />
    </WeatherDetailCard>
  );
}
export default PressureCard;
