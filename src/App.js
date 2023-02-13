import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AllCountries from "./components/AllCountries";
import CountryInfo from "./components/CountryInfo";

function App() {
  return (
    <>
      <div className="header">
        <div className="container">
          <h5>Country Info</h5>
        </div>
      </div>
      <div className="container">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route path="/country/:countryName" element={<CountryInfo />} />
        </Routes>
        </BrowserRouter>
        
      </div>
    </>
  );
}

export default App;
