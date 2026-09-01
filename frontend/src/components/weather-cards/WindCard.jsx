import WeatherDetailCard from "../WeatherDetailCard";
import WindCompass from "../WindCompass";

function WindCard({ forecast }) {
  return (
    <WeatherDetailCard title="Wind">
      <WindCompass degrees={forecast.current.windDegrees} />

      <p>
        {forecast.current.windSpeed} mph {forecast.current.windDirection}
      </p>
    </WeatherDetailCard>
  );
}
export default WindCard;
