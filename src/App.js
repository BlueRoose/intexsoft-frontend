import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import "./index.scss";
import RequireAuth from "./auth/RequireAuth";
import { AuthProvider } from "./auth/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route
              exact
              path="/mainpage"
              element={
                <RequireAuth>
                  <></>
                </RequireAuth>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
