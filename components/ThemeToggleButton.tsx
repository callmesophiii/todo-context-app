import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? '🌙 Switch to Dark' : '☀️ Switch to Light'}
    </button>
  );
};

export default ThemeToggleButton;
