import { createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";

const PageLocation = createContext();

const PageAppProvider = ({ children }) => {
  const path = useLocation();
  const [pageUrl, setPageUrl] = useState("");

  const handlePageUrl = () => {
    setPageUrl(path.pathname);
  };

  return (
    <PageLocation.Provider value={{ handlePageUrl, pageUrl }}>
      {children}
    </PageLocation.Provider>
  );
};

const usePage = () => {
  return useContext(PageLocation);
};

export default usePage;
export { PageAppProvider };
