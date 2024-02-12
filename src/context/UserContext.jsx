import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [authenticatedEmail, setAuthenticatedEmail] = useState();
  const [userData, setUserData] = useState({
    username: "",
    role: "",
    profilePicture: "",
    phoneNumber: "",
    bio: "",
    email: "",
  });

  useEffect(() => {
    const storedEmail = localStorage.getItem("authenticatedEmail");
    if (storedEmail) {
      setAuthenticatedEmail(storedEmail);
    }
  }, []);

  const value = {
    userData,
    setUserData,
    setAuthenticatedEmail,
    authenticatedEmail,
  };
  console.log(authenticatedEmail);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;

export { UserContext };
