import React from "react";
//import pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from "./pages/MovieDetails";
//Global style
import GlobalStyle from "./components/GlobalStyle";
//Router
import { Route,Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/work" element={<OurWork />} />
        <Route path="/work/:id" element={<MovieDetail />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
