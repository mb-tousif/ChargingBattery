import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import BatteryStatus from './components/batteryStatus/BatteryStatus';

function App() {
  return (
    <div className="App">
      <BatteryStatus></BatteryStatus>
    </div>
  );
}

export default App;
