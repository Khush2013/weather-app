import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import CreateAccountPage from "./pages/CreateAccountPage";
import WeatherDetailsPage from "./pages/WeatherDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/weather/:city" element={<WeatherDetailsPage />}></Route>
      <Route path="/account" element={<CreateAccountPage />}></Route>
    </Routes>
  );
}
export default App;
