import "./index.scss";
import { AuthProvider } from "./auth/AuthProvider";
import { PostsProvider } from "./posts/PostsProvider";
import GuestRoutes from "./components/Routes/GuestRoutes";
import PrivateRoutes from "./components/Routes/PrivateRoutes";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    addEventListener("scroll", () => {
      if (window.scrollY) {
        sessionStorage.setItem(window.location.pathname, window.scrollY);
      }
    });
  }, []);

  return (
    <AuthProvider>
      <PostsProvider>
        <BrowserRouter>
          <div className="App">
            <PrivateRoutes />
            <GuestRoutes />
          </div>
        </BrowserRouter>
      </PostsProvider>
    </AuthProvider>
  );
}

export default App;
