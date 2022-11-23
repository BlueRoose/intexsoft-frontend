import "./index.scss";
import { AuthProvider } from "./auth/AuthProvider";
import { PostsProvider } from "./posts/PostsProvider";
import GuestRoutes from "./components/Routes/GuestRoutes";
import PrivateRoutes from "./components/Routes/PrivateRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <PostsProvider>
        <BrowserRouter>
          <div className="App">
            <GuestRoutes />
            <PrivateRoutes />
          </div>
        </BrowserRouter>
      </PostsProvider>
    </AuthProvider>
  );
}

export default App;
