import WeatherDetailCard from "../WeatherDetailCard";

function FeelsLikeCard({ forecast }) {
  const feelsLike = forecast.daily[0].feelsLike;

  return (
    <WeatherDetailCard title="Feels Like">
      <div className="flex items-center justify-center h-full">
        <div
          className={`rounded-full size-50
          ${
            feelsLike <= 40
              ? "bg-blue-700"
              : feelsLike <= 50
                ? "bg-blue-500"
                : feelsLike <= 60
                  ? "bg-blue-300"
                  : feelsLike <= 76
                    ? "bg-orange-500"
                    : feelsLike <= 86
                      ? "bg-red-500"
                      : feelsLike >= 90
                        ? "bg-red-900"
                        : "bg-red-500"
          }`}
        >
          <h2 className="font-bold text-6xl flex items-center justify-center h-full">
            {feelsLike}°
          </h2>
        </div>
      </div>
    </WeatherDetailCard>
  );
}
export default FeelsLikeCard;
