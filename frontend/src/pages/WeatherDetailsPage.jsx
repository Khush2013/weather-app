import { useParams } from "react-router";
import TemperatureCard from "../components/weather-cards/TemperatureCard";
import WeatherChart from "../components/WeatherChart";
import weatherData from "./FakeData";
import FeelsLikeCard from "../components/weather-cards/FeelsLikeCard";
import WindCard from "../components/weather-cards/WindCard";
import HumidityCard from "../components/weather-cards/HumidityCard";
import UVIndex from "../components/weather-cards/UVIndexCard";
import AirQuality from "../components/weather-cards/AirQualityCard";
import PressureCard from "../components/weather-cards/PressureCard";
import DewPointCard from "../components/weather-cards/DewPointCard";
import VisibilityCard from "../components/weather-cards/VisibilityCard";
import SunriseSunsetCard from "../components/weather-cards/SunriseSunsetCard";
import MoonriseMoonsetCard from "../components/weather-cards/MoonriseMoonsetCard";
import MoonPhase from "../components/weather-cards/MoonPhase";

function WeatherDetailsPage() {
  const { city } = useParams();

  return (
    <div>
      <h1 className="card-title font-bold text-2xl">{city}</h1>
      <h1>Weather Detail Page</h1>

      <WeatherChart data={weatherData.daily} />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
        <TemperatureCard forecast={weatherData} />
        <FeelsLikeCard forecast={weatherData} />
        <WindCard forecast={weatherData} />
        <HumidityCard forecast={weatherData} />
        <UVIndex forecast={weatherData} />
        <AirQuality forecast={weatherData} />
        <DewPointCard forecast={weatherData} />
        <PressureCard forecast={weatherData} />
        <VisibilityCard forecast={weatherData} />
        <SunriseSunsetCard forecast={weatherData} />
        <MoonriseMoonsetCard forecast={weatherData} />
        <MoonPhase forecast={weatherData} />

        {/* <p>Temperature 82F</p>
        <p>Feels Like 82F</p>
        <p>Wind 1000 mph</p>
        <p>Humidity 60%</p>
        <p>UV Index 10</p>
        <p>Air Quality 52</p>
        <p>Dew Point 65</p>
        <p>Pressure 29.97 in</p>
        <p>Visibility 0 mi</p>
        <p>Sunrise - Sunset</p>
        <p>Moonrise - Moonset</p>
        <p>Moon Phase</p> */}
      </div>
    </div>
  );
}
export default WeatherDetailsPage;
