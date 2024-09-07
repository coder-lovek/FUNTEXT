import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert("Switched to Dark Mode", "warning")
    } else {
      setMode('light');
      showAlert("Switched to Light Mode", "success")
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      mes: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <div className="App" style={{ 
      backgroundColor: mode === 'dark' ? '#dc3545' : 'white', 
      color: mode === 'dark' ? 'white' : 'black', 
      minHeight: '100vh'
    }}>
      <Navbar title="Luffy" mode={mode} toggleMode={toggleMode} />
      <Alerts props={alert} />

      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Text" mode={mode} />
      </div>
    </div>
  );
}

export default App;
