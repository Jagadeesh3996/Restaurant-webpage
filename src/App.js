
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComp from "./pages/header/header";
import HomeComp, { AboutComp, NoPage } from "./pages/content/main";
import MenuComp from "./pages/content/menu";
import ReserComp from "./pages/content/reservation";
import Contact from "./pages/content/contact";
import FooterComp from "./pages/footer/footer";

import './App.css';
 
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><HeaderComp /><FooterComp/></>}>
          <Route index element={<HomeComp />} />
          <Route path="/home" element={<HomeComp />} />
          <Route path="/about" element={<AboutComp />} />
          <Route path="/menu" element={<MenuComp />} />
          <Route path="/reservation" element={<ReserComp />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}