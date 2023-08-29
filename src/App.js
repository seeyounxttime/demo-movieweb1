import "./App.scss";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/main" element={<Home />} />
          <Route path="/signup" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
