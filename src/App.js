import Costs from "./components/Costs";


function App() {

  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: "холодильник",
      amount: 999.99

    },
    {
      date: new Date(2012, 5, 9),
      description: "телефон",
      amount: 580

    },
    {
      date: new Date(2020, 9, 18),
      description: "машина",
      amount: 1999

    },

  ]

  return (
   <div>
    <h1>Начнем изучение реакт</h1>
    <Costs costs={costs}/>
  
   </div>
  );
}

export default App;
