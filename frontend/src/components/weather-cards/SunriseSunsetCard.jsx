import RiseAndFall from "../RiseAndFall";
import WeatherDetailCard from "../WeatherDetailCard";
import { MdSunny as Sun } from "react-icons/md";

function SunriseSunsetCard({ forecast }) {
  return (
    <WeatherDetailCard title="Sunrise - Sunset">
      <RiseAndFall
        type={"Sun"}
        positionIcon={<Sun className="size-13 text-yellow-200" />}
        riseTime={forecast.current.sunriseTime}
        setTime={forecast.current.sunsetTime}
        progress={1}
      />
    </WeatherDetailCard>
  );
}
export default SunriseSunsetCard;
