import { createContext, useContext, ReactNode, useReducer } from "react";

interface Props {
  children: ReactNode;
}

const intialSettings = {
  isOpenCart: false,
  isOpenNav: false,
};

const AppContext = createContext(intialSettings);

const appReducer = (
  state: { isOpenCart: boolean; isOpenNav: boolean },
  action: { type: any }
) => {
  switch (action.type) {
    case "isOpenCart":
      return { ...state, isOpenCart: !state.isOpenCart };
    case "isOpenNav":
      return { ...state, isOpenNav: !state.isOpenNav };

    default:
      return state;
  }
};

export const AppProvider = ({ children }: Props) => {
  const [appSettings, setAppSettings] = useReducer(appReducer, intialSettings);
  return (
    <AppContext.Provider value={appSettings}>{children}</AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
