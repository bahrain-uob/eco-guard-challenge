import "./App.css";
import HeatMap from "./HeatMap.tsx";
import Login from "./Login.tsx";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Review from "./Review.tsx";
import ListView from "./ListView.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/HeatMap" element={<HeatMap />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/ListView" element={<ListView />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
