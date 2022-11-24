import "./index.scss";
import { AuthProvider } from "./auth/AuthProvider";
import { PostsProvider } from "./posts/PostsProvider";
import GuestRoutes from "./components/Routes/GuestRoutes";
import PrivateRoutes from "./components/Routes/PrivateRoutes";
import { BrowserRouter } from "react-router-dom";
import RequireAuth from "./auth/RequireAuth";

function App() {
  return (
    <AuthProvider>
      <PostsProvider>
        <BrowserRouter>
          <div className="App">
            <GuestRoutes />
            <RequireAuth>
            <PrivateRoutes />
            </RequireAuth>
          </div>
        </BrowserRouter>
      </PostsProvider>
    </AuthProvider>
  );
}

export default App;
