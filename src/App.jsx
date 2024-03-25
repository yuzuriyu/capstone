import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VoltageContextProvider from "./context/VoltageContext";
import PageContextProvider from "./context/PageContext";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DetailsPage from "./pages/DetailsPage";
import HowPage from "./pages/HowPage";
import Gallery from "./pages/Gallery";


const App = () => {
  return (
    <PageContextProvider>
      <VoltageContextProvider>
        <div className="font-poppins text-darkblue">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/project-details" element={<DetailsPage />} />
            <Route path="/how-it-works" element={<HowPage />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>
      </VoltageContextProvider>
    </PageContextProvider>
  );
};

export default App;
