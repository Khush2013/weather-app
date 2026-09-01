import UVGauge from "../UVGauge";
import WeatherDetailCard from "../WeatherDetailCard";

function updateLabel(forecast) {
  if (forecast.current.uvIndex <= 2) {
    return "Low";
  }
  if (forecast.current.uvIndex <= 5) {
    return "Moderate";
  }
  if (forecast.current.uvIndex <= 7) {
    return "High";
  }
  if (forecast.current.uvIndex <= 10) {
    return "Very High";
  }

  return "Extreme";
}

function UVIndex({ forecast }) {
  return (
    <WeatherDetailCard title="UV Index">
      <UVGauge value={forecast.current.uvIndex} label={updateLabel(forecast)} />
    </WeatherDetailCard>
  );
}
export default UVIndex;
