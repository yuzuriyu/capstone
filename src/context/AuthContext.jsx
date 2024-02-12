import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children, setIsAuthenticated }) => {
  return (
    <AuthContext.Provider value={{ setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export { AuthContext, AuthContextProvider };
