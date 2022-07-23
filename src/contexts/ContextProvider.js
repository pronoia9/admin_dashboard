import { setChart } from '@syncfusion/ej2/spreadsheet';
import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [chartStyles, setChartStyles] = useState({
    palette: [currentColor, `${currentMode === 'Dark' ? '#555' : '#404041'}`],
    background: `${currentMode === 'Dark' ? '#33373E' : '#fff'}`,
    legendSettings: {
      background: `${currentMode === 'Dark' ? '#33373E' : '#fff'}`,
      textStyle: { color: `${currentMode === 'Dark' ? '#fff' : '#33373E'}` },
    },
    axisStyles: {
      titleStyle: { color: `${currentMode === 'Dark' ? '#888' : ''}` },
    }
  });

  const setColor = (color) => {
    setCurrentColor(color);
    setChartStyles((chartStyles) => ({...chartStyles, palette: [color, chartStyles.palette[1]]}))
    localStorage.setItem('colorMode', color);
    setThemeSettings(false);
  };

  const setMode = (e) => {
    const mode = e.target.value;
    setCurrentMode(mode);
    setChartStyles((chartStyles) => ({
      ...chartStyles,
      background: `${mode === 'Dark' ? '#33373E' : '#fff'}`,
      legendSettings: {
        background: `${mode === 'Dark' ? '#33373E' : '#fff'}`,
        textStyle: { color: `${mode === 'Dark' ? '#fff' : '#33373E'}` },
      },
      axisStyles: {
        titleStyle: { color: `${mode === 'Dark' ? '#888' : ''}` }
      },
    }));
    localStorage.setItem('themeMode', e.target.value);
    setThemeSettings(false);
  };

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu, setActiveMenu,
        isClicked, setIsClicked, handleClick,
        screenSize, setScreenSize,
        currentColor, setCurrentColor, setColor,
        currentMode, setCurrentMode, setMode,
        themeSettings, setThemeSettings,
        chartStyles, setChartStyles,
      }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);