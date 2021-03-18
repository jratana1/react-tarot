import CardContainer from './containers/cardContainer'
import ReadingsContainer from './containers/readingsContainer'
import React, { useState, useEffect } from 'react'
import { HashRouter, Route, Link } from 'react-router-dom';
import Count from './containers/counter'

export function shuffle(array) {

  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

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
          <>
            <li><Link to="/">Home</Link></li> 
            <li><Link to="/cards">Cards</Link></li>
            <li><Link to="/readings" >Readings</Link></li>
            <Route exact path="/" >
                <Count/>
            </Route>
            <Route exact path="/cards" >
              <div className="Card-Index">
                {cards.map((card) => <CardContainer props={card}/>)}
              </div>
            </Route>
            <Route exact path="/readings" >
                <ReadingsContainer cards={cards}/>
            </Route>
          </>
        )
      }
    }
  
  return (
    <HashRouter basename='/'>
      <div className="App">
            {renderLoad()}      
      </div>
    </HashRouter>
  );
}

export default App;
