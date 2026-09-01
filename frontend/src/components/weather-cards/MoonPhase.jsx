import WeatherDetailCard from "../WeatherDetailCard";

function updateMoonEmoji(phase) {
  if (phase === "New Moon") {
    return "🌑";
  }
  if (phase === "Waxing Crescent") {
    return "🌒";
  }
  if (phase === "First Quarter") {
    return "🌓";
  }
  if (phase === "Waxing Gibbous") {
    return "🌔";
  }
  if (phase === "Full Moon") {
    return "🌕";
  }
  if (phase === "Waning Gibbous") {
    return "🌖";
  }
  if (phase === "Last Quarter") {
    return "🌗";
  }
  if (phase === "Waning Crescent") {
    return "🌘";
  }
}

function MoonPhase({ forecast }) {
  return (
    <WeatherDetailCard title="Moon Phase">
      <div className="flex items-center flex-col">
        <div className="p-10">
          <h2 className="text-8xl">
            {updateMoonEmoji(forecast.current.moonPhase)}
          </h2>
        </div>

        <h2 className="font-bold text-3xl">{forecast.current.moonPhase}</h2>
      </div>
    </WeatherDetailCard>
  );
}
export default MoonPhase;
