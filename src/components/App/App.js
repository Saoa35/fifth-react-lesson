import ControledCompExamp from '../ControledCompExamp/ControledCompExamp';
import FilterableProductTable from '../FiltarableProductTable';
import PropTypesExample from '../PropTypesExample/PropTypesExample';
import Calculator from '../TemperatureCalculator/TemperatureCalculator';
import './App.css';

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

function App() {
  return (
    <div className="App">
      {/* <ControledCompExamp/> */}

      <PropTypesExample name='Alex' age={37}/>

      {/* <Calculator/> */}

      <FilterableProductTable products={PRODUCTS}/>
    </div>
  );
}

export default App;
