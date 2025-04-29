import './App.css';
import {inventory, bestSellingTv} from './constants/inventory.js';
import salesCounter from './helpers/sales.js';
import arrayJoiner from './helpers/arrayJoiner.js';


function App() {
    const totalInventory = arrayJoiner(inventory, bestSellingTv);


    console.log(salesCounter(totalInventory));



  return (

    <>
      <h1>Begin hier met met maken van de applicatie!</h1>


    </>
  )
}

export default App
