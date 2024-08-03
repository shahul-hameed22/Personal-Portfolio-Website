import { useState } from 'react';
import './App.css';
import MainComponent from './components/MainComponent';
import NavBar from './components/NavBar';

function App() {
  const [mode, setMode] = useState('dark');
  const [btnText, setbtnText] = useState("Enable Dark Mode");
  const [isChecked, setChecked] = useState(true);

  const DarkMode = () => {
    if (mode === 'dark') {
      setChecked(!isChecked);
      setTimeout(() => {
        setMode("light");
      }, 200);
    } else {
      setChecked(!isChecked);
      setTimeout(() => {
        setMode("dark");
      }, 200);
    }
  }
  return (
    <div className="background-container">
      <NavBar DarkMode={DarkMode} mode={mode} isChecked={isChecked} />
      <MainComponent mode={mode} />
    </div>
  );
}

export default App;
