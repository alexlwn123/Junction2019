import React, { useReducer, createContext, ReactNode } from "react";
import { dataReducer, initialDataState } from "../reducers/dataReducer";
import { useDataService } from "../services/dataService";

interface DataProviderProps {
  children: ReactNode;
}
export const DataContext = createContext({} as any);

export const DataProvider = ({ children }: DataProviderProps) => {
  const [data, dataDispatch] = useReducer(dataReducer, initialDataState);
  const dataService = useDataService(data, dataDispatch);

  const values = {
    data,
    dataDispatch,
    dataService,
  };
return <DataContext.Provider value={values} >{children}</DataContext.Provider>
};