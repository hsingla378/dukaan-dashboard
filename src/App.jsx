import "./App.css";
import Payouts from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Payouts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
