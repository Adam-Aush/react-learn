import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, {useState} from "react";



const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2021, 2, 12),
    description: "холодильник",
    amount: 999.99

  },
  {
    id: 'c2',
    date: new Date(2020, 5, 9),
    description: "телефон",
    amount: 580

  },
  {
    id: 'c3',
    date: new Date(2020, 9, 18),
    description: "машина",
    amount: 1999

  },

];

function App() {

  
  const [costs,setCosts] =  useState(INITIAL_COSTS)
  

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    })
  }

  return (
   <div>
    <NewCost onAddCost={addCostHandler}/>
    <Costs costs={costs}/>
  
   </div>
  );
}

export default App;
