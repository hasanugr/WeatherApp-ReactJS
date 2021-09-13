import { createContext, useContext, useState } from "react";

const ProviderExpContext = createContext();
const DefaultCity = "İzmir";

export const ProviderContext = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState(DefaultCity);

  const values = {
    selectedCity,
    setSelectedCity,
    DefaultCity,
  };

  return (
    <ProviderExpContext.Provider value={values}>
      {children}
    </ProviderExpContext.Provider>
  );
};

export const useProvidedContext = () => useContext(ProviderExpContext);
