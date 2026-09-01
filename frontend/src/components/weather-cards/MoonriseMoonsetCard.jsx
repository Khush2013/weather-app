import RiseAndFall from "../RiseAndFall";
import WeatherDetailCard from "../WeatherDetailCard";

function MoonriseMoonsetCard({ forecast }) {
  return (
    <WeatherDetailCard title="Moonrise - Moonset">
      <RiseAndFall
        type={"Moon"}
        positionIcon={<span className="text-[52px]">🌕</span>}
        riseTime={forecast.current.moonriseTime}
        setTime={forecast.current.moonsetTime}
        progress={0}
      />
    </WeatherDetailCard>
  );
}
export default MoonriseMoonsetCard;
