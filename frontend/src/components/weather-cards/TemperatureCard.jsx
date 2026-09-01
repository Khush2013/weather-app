import WeatherDetailCard from "../WeatherDetailCard";

function colorRanges(midTemp) {
  if (midTemp <= 32) {
    return "from-blue-700 to-blue-200";
  }
  if (midTemp <= 40) {
    return "from-blue-200 to-green-700";
  }
  if (midTemp <= 50) {
    return "from-green-300 to-yellow-300";
  }
  if (midTemp <= 60) {
    return "from-yellow-300 to-orange-300";
  }
  if (midTemp <= 70) {
    return "from-orange-300 to-orange-700";
  }
  if (midTemp <= 80) {
    return "from-orange-700 to-red-500";
  }

  return "from-red-500 to-red-900";
}

function TemperatureCard({ forecast }) {
  const temperatures = forecast.hourly.map((hour) => hour.temp);
  const minTemp = Math.min(...temperatures);
  const maxTemp = Math.max(...temperatures);
  const midTemp = (maxTemp + minTemp) / 2;
  const range = maxTemp - minTemp || 1;

  return (
    <div>
      <WeatherDetailCard title="Temperature">
        <div className="flex justify-between font-bold text-2xl px-4">
          <span>{forecast.daily[0].low}°</span>
          <span>{forecast.daily[0].high}°</span>
        </div>

        <div className="relative group">
          {/* small temp chart */}
          <div className="h-32 flex items-end gap-2 mt-6 justify-between">
            {forecast.hourly.map((hour, index) => {
              const barHeight = ((hour.temp - minTemp) / range) * 100 + 30;

              return (
                <div className="flex flex-col gap-1 overflow-hidden">
                  <div
                    key={index}
                    className={`bg-linear-to-t ${colorRanges(midTemp)} transition-all rounded-full w-4`}
                    style={{ height: `${barHeight}px` }}
                  ></div>
                  <span className="text-xs">{hour.time}</span>
                </div>
              );
            })}
          </div>

          {/* popup large temp chart */}
          <div
            className="absolute left-1/2 top-full -translate-x-1/2 mt-4 opacity-0 invisible
                      group-hover:opacity-100 group-hover:visible transition-all duration-300
                      bg-base-100 rounded-xl shadow-2-xl border border-base-300 p-6 w-205 z-50 ml-30"
          >
            <h2 className="text-2xl font-bold mb-6">Temperature Chart</h2>
            <div className="flex justify-between font-bold text-4xl px-4">
              <span>{forecast.daily[0].low}°</span>
              <span>{forecast.daily[0].high}°</span>
            </div>

            <div className="h-72 flex items-end gap-2 mt-6 justify-between">
              {forecast.hourly.map((hour, index) => {
                const barHeight = ((hour.temp - minTemp) / range) * 100 + 30;

                return (
                  <div className="flex flex-col gap-1">
                    <div
                      key={index}
                      className={`bg-linear-to-t ${colorRanges(midTemp)} transition-all rounded-full w-6`}
                      style={{ height: `${barHeight * 2}px` }}
                    ></div>
                    <span className="text-sm">{hour.time}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </WeatherDetailCard>
    </div>
  );
}
export default TemperatureCard;
