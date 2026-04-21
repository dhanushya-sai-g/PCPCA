import { createContext, useContext, useReducer } from "react";
import { appReducer, initialState } from "../reducers/appReducer";
import { fetchData } from "../services/api";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const loadData = async (type) => {
    dispatch({ type: "LOADING" });
    try {
      const data = await fetchData(type);
      dispatch({ type: "SET_DATA", payload: { type, data } });
    } catch {
      dispatch({ type: "ERROR" });
    }
  };

  return (
    <AppContext.Provider value={{ state, loadData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);