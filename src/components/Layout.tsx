import { useState } from 'react';
import { Outlet, useOutletContext } from 'react-router';

type ContextType = { 
  darkMode: boolean; 
  toggleDarkMode: () => void;
};

export function Layout() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return <Outlet context={{ darkMode, toggleDarkMode } satisfies ContextType} />;
}

export function useDarkMode() {
  return useOutletContext<ContextType>();
}
