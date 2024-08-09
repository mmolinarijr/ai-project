import { useState } from 'react';

const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return <button onClick={toggleTheme}>{isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}</button>;
};

export default ThemeToggle;
