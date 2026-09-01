import WeatherDetailCard from "../WeatherDetailCard";

function changeColor(dewPoint) {
  if (dewPoint <= 40) {
    return "bg-blue-400";
  }
  if (dewPoint <= 65) {
    return "bg-amber-500";
  }

  return "bg-orange-700";
}

function DewPointCard({ forecast }) {
  return (
    <WeatherDetailCard title="Dew Point">
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-bold text-3xl">{forecast.current.dewPoint}°</h2>

        <div className="mt-6">
          <div className="relative w-125 h-25 rounded-full overflow-hidden">
            <div className="absolute bg-gray-500 w-full h-full"></div>
            <div
              className={`absolute ${changeColor(forecast.current.dewPoint)} h-full z-20`}
              style={{ width: `${forecast.current.dewPoint}%` }}
            ></div>
          </div>

          <div className="w-125 mt-2">
            <div className="flex justify-between">
              <span className="font-semibold text-lg">30</span>
              <span className="font-semibold text-lg">80</span>
            </div>
          </div>
        </div>
      </div>
    </WeatherDetailCard>
  );
}
export default DewPointCard;
