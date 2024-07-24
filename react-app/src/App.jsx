
import { useState } from 'react';
import './App.css';
import Products from './components/Products/Products.jsx';
import Counter from './components/Counter.jsx';


const App = () => {
  
  const [counter, setCounter] = useState(1);


  return (
    <div className="App">
         
         <Products/>
         <Counter counter={counter} setCounter={setCounter} >
          {counter} 
         </Counter>        
    </div>
    
  );
}

export default App;
