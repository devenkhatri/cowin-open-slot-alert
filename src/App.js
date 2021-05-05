import logo from './logo.svg';
import './App.css';
import addNotification from 'react-push-notification';

const App = () => {
  const buttonClick = () => {
    addNotification({
      title: 'Warning',
      subtitle: 'This is a subtitle',
      message: 'This is a very long message',
      theme: 'red',
      native: false // when using native, your OS will handle theming.
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="page">
          <button onClick={buttonClick} className="button">
            Test Notification
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
