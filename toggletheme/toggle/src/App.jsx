import './app.css';

function App() {
  const tab = () => {
    document.body.classList.toggle('dark-theme');
    const toggleSwitch = document.querySelector('.toggle-switch');
    toggleSwitch.classList.toggle('move-right');
  };

  return (
    <div>
      <h1>Toggle Theme App</h1>
      <div onClick={tab} className="toggle-container">
        <div className="toggle-switch"></div>
      </div>
    </div>
  );
}

export default App;