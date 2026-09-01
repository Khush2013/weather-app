import { Link } from "react-router";

function CityCard({ title }) {
  return (
    <Link to={`/weather/${title}`}>
      <div className="card hero bg-neutral w-75 shadow-xl p-3 m-2">
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{title}</h2>
          <p>Temperature 82F</p>
          <p>Humidity 60%</p>
          <p>Condition: clear</p>
        </div>
      </div>
    </Link>
  );
}
export default CityCard;
