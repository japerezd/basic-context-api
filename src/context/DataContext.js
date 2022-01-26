import { createContext, useState } from 'react';

export const DataContext = createContext();

const dataFixed = {
  name: 'Beto',
  age: 24,
};

export default function DataProvider({ children }) {
  const [data, setData] = useState(dataFixed);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}
