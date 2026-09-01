function WeatherDetailCard({ title, children }) {
  return (
    <div className="card rounded-box bg-neutral border-shadow-lg w-full min-h-75">
      <div className="card-body">
        <h1 className="card-title text-2xl">{title}</h1>
        {children}
      </div>
    </div>
  );
}
export default WeatherDetailCard;
