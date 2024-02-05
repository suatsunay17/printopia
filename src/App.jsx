import './App.css'
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./pages/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Forum from "./components/Forum/Forum";
import NoMatch from "./pages/NoMatch/NoMatch";

import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="forum" element={<Forum />} />
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
      <Outlet/>
      <Footer />
    </>
  );
}

export default App;
