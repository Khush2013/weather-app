import ArcGauge from "../ArcGauge";
import WeatherDetailCard from "../WeatherDetailCard";

function changeLabel(humidity) {
  if (humidity <= 30) {
    return "Very Dry";
  }
  if (humidity <= 60) {
    return "Moderate";
  }
  if (humidity <= 80) {
    return "High";
  }

  return "Extreme";
}

function HumidityCard({ forecast }) {
  return (
    <WeatherDetailCard title="Humidity">
      <ArcGauge
        value={forecast.current.humidity}
        text={"%"}
        label={changeLabel(forecast.current.humidity)}
        color={"#3B82F6"}
      />
    </WeatherDetailCard>
  );
}
export default HumidityCard;
