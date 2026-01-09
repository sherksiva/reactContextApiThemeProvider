import { useTheme } from './contexts/ThemeContext';
import './App.css'

// Child component
const ThemedButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} style={{ background: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white' }}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

// Main App component
function App() {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}`}> {/* Use a CSS class for overall styling */}
      <h1>React Context API Sample Project</h1>
      <p>Current Theme: {theme}</p>
      <ThemedButton />
    </div>
  );
}

export default App;