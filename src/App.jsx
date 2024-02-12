import React, { useContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VoltageContextProvider from "./context/VoltageContext";
import PageContextProvider from "./context/PageContext";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DetailsPage from "./pages/DetailsPage";
import HowPage from "./pages/HowPage";
import Gallery from "./pages/Gallery";
import Login from "./components/Login";
import Register from "./components/Register";

import { auth } from "./config/firebase";

import ProfilePage from "./pages/ProfilePage";

const App = () => {
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);

  const renderProtectedRoute = (element) => (user ? element : <Login />);

  return (
    <PageContextProvider>
      <VoltageContextProvider>
        <div className="font-poppins text-darkblue">
          <Routes>
            <Route path="/" element={renderProtectedRoute(<HomePage />)} />
            <Route
              path="/about"
              element={renderProtectedRoute(<AboutPage />)}
            />
            <Route
              path="/contact"
              element={renderProtectedRoute(<ContactPage />)}
            />
            <Route
              path="/project-details"
              element={renderProtectedRoute(<DetailsPage />)}
            />
            <Route
              path="/how-it-works"
              element={renderProtectedRoute(<HowPage />)}
            />
            <Route
              path="/gallery"
              element={renderProtectedRoute(<Gallery />)}
            />
            <Route
              path="/profile"
              element={renderProtectedRoute(<ProfilePage />)}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </VoltageContextProvider>
    </PageContextProvider>
  );
};

export default App;
