import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import db from "./firebase/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

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
import RequireAuth from "./components/Auth/require-auth";
import CreatePost from "./components/Forum/CreatePost/CreatePost";
import Prod from "./components/Prod/Prod";
import PostDetails from "./components/Forum/PostDetails/PostDetails";

import { AuthContext } from "./context/AuthContext";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(
          query(collection(db, "posts"), orderBy("createdAt", "desc"))
        );
        const postList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(postList);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="forum" element={<Forum posts={posts} loading={loading}/>} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="create" element={<CreatePost />} />
          <Route path="/post/:postId" element={<PostDetails />} />
          <Route
            path="profile"
            element={
              <RequireAuth>
                <Profile posts={posts} />
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
      <Prod />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;