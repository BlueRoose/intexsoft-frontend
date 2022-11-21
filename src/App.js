import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import "./index.scss";
import RequireAuth from "./auth/RequireAuth";
import { AuthProvider } from "./auth/AuthProvider";
import Posts from "./pages/Posts/Posts";
import GuestRoute from "./auth/GuestRoute";
import { PostsProvider } from "./posts/PostsProvider";

function App() {
  return (
    <AuthProvider>
      <PostsProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/login" element={<GuestRoute><Login /></GuestRoute>} />
            <Route exact path="/register" element={<GuestRoute><Register /></GuestRoute>} />
            <Route
              exact
              path="/posts"
              element={
                <RequireAuth>
                  <Posts />
                </RequireAuth>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
      </PostsProvider>
    </AuthProvider>
  );
}

export default App;
