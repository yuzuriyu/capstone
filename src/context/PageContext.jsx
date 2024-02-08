import { createContext, useState } from "react";

const PageContext = createContext();

const PageContextProvider = ({ children }) => {
  const [activePage, setActivePage] = useState("Overview");

  const handleActivePage = (page) => {
    setActivePage(page);
  };

  const value = {
    activePage,
    handleActivePage,
  };

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

export default PageContextProvider;

export { PageContext, PageContextProvider };
