import { Outlet } from "react-router";
import "./App.css";
import Footer from "./components/layout/Footer";
import MainLayout from "./components/layout/MainLayout";
import Navbar from "./components/layout/Navbar";
import useScrollToTop from "./hooks/useScrollToTop";

const App = () => {
   useScrollToTop();
  return (
    <>
      <MainLayout>
        <Navbar />
        <Outlet />
        <Footer />
      </MainLayout>
    </>
  );
}

export default App;
