import WeatherDetailCard from "../WeatherDetailCard";

function VisibilityCard({ forecast }) {
  // const maxRange = 10;
  const bars = [
    { id: 1, height: 25 },
    { id: 2, height: 35 },
    { id: 3, height: 45 },
    { id: 4, height: 55 },
    { id: 5, height: 65 },
    { id: 6, height: 75 },
    { id: 7, height: 85 },
    { id: 8, height: 95 },
    { id: 9, height: 105 },
    { id: 10, height: 115 },
  ];

  return (
    <WeatherDetailCard title="Visibility">
      <h2 className="text-2xl font-bold">{forecast.current.visibility} mi</h2>

      <div className="w-full max-w-125 mx-auto">
        {/* graph */}
        <div className="h-42.5 flex items-end justify-center gap-2 px-2 pb-2">
          {bars.map((bar) => (
            <div
              key={bar.id}
              className={`w-10 rounded-md transition-colors duration-300
              ${bar.id <= forecast.current.visibility ? "bg-blue-500" : "bg-gray-600 opacity-60"}`}
              style={{ height: `${bar.height}px` }}
            />
          ))}
        </div>

        <div className="flex justify-between">
          <h2>0 mi</h2>
          <h2>5 mi</h2>
          <h2>10 mi</h2>
        </div>
      </div>
    </WeatherDetailCard>
  );
}
export default VisibilityCard;
