import React, { createContext, useContext, useState } from "react";

let stateContext = createContext();

export let initailState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initailState);
  const handleClick = (ele) => {
    isClicked[ele] == false
      ? setIsClicked({ ...initailState, [ele]: true })
      : setIsClicked(initailState);
  };
  const handleClose = () => {
    setIsClicked(initailState);
  };
  const [scSize, setScSize] = useState(undefined);
  const [mainColor, setMainColor] = useState("#F88585");
  const [mode, setMode] = useState("light");

  return (
    <stateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        scSize,
        setScSize,
        mainColor,
        setMainColor,
        handleClose,
        mode,
        setMode,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
