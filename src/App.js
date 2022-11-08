import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register"
import "./index.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
