import CardContainer from './components/cardContainer'
import React, { useState, useEffect } from 'react'

function App() {
  const [cards, setCards] = useState([])
  const [isBusy, setBusy] = useState(true)
  
  useEffect(
    () => {
      fetch('http://localhost:3000/api/v1/cards')
        .then(resp => resp.json())
        .then(data =>{ 
              setCards(data)
              setBusy(false);})
      },
    [])

    const renderLoad = () => {
      if (isBusy) {
        return <div>Loading</div>;
      } else {
        return (
          cards.map((card) => <CardContainer props={card}/>)
        )
      }
    }
  
  return (
    <div className="App">
           {renderLoad()}      
    </div>
  );
}

export default App;
