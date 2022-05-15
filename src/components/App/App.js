import ControledCompExamp from '../ControledCompExamp/ControledCompExamp';
import PropTypesExample from '../PropTypesExample/PropTypesExample';
import Calculator from '../TemperatureCalculator/TemperatureCalculator';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <ControledCompExamp/> */}

      <PropTypesExample name='Alex' age={37}/>

      {/* <Calculator/> */}
    </div>
  );
}

export default App;
