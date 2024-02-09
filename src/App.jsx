import { Routes, Route, Outlet, useNavigate } from "react-router-dom";

import "./App.css";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./pages/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Forum from "./components/Forum/Forum";
import NoMatch from "./pages/NoMatch/NoMatch";

import Register from "./components/Auth/Register/Register";
import Login from "./components/Auth/Login/Login";
import Profile from "./components/Profile/Profile";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import RequireAuth from "./components/Auth/require-auth";
import CreatePost from "./components/Forum/CreatePost/CreatePost";

function App() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="forum" element={<Forum />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="create" element={<CreatePost />} />
          <Route
            path="profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
