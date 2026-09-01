import ArcGauge from "../ArcGauge";
import WeatherDetailCard from "../WeatherDetailCard";

function changeColor(airQuality) {
  if (airQuality <= 50) {
    return "#00e400";
  }
  if (airQuality <= 100) {
    return "#ffff00";
  }
  if (airQuality <= 150) {
    return "#ff7e00";
  }
  if (airQuality <= 200) {
    return "#ff0000";
  }
  if (airQuality <= 300) {
    return "#8f3f97";
  }

  return "#8e0023";
}

function changeIndexCategories(airQuality) {
  if (airQuality <= 50) {
    return "Good";
  }
  if (airQuality <= 100) {
    return "Moderate";
  }
  if (airQuality <= 150) {
    return "Poor for Some";
  }
  if (airQuality <= 200) {
    return "Unhealthy";
  }
  if (airQuality <= 300) {
    return "Very Unhealthy";
  }

  return "Hazardous";
}

function AirQuality({ forecast }) {
  return (
    <WeatherDetailCard title="Air Quality">
      <ArcGauge
        value={forecast.current.airQuality}
        label={changeIndexCategories(forecast.current.airQuality)}
        color={changeColor(forecast.current.airQuality)}
        max={500}
      />
    </WeatherDetailCard>
  );
}
export default AirQuality;
