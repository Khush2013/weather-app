import { Menu } from "lucide-react";

function SearchBar() {
  return (
    <div>
      <nav className="navbar">
        <div>
          <button className="hamburger" id="hamburgerBtn">
            <Menu />
          </button>
        </div>

        <div className="flex gap-2 w-100 mx-auto">
          <input
            type="text"
            placeholder="Enter City"
            className="input input-bordered"
          />
          <button className="btn btn-primary">Search</button>
        </div>

        <div>
          <button className="btn btn-primary">Create Account</button>
        </div>
      </nav>
    </div>
  );
}
export default SearchBar;
