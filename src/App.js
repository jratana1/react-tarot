import CardContainer from './containers/cardContainer'
import ReadingContainer from './containers/readingContainer'

import React, { useState, useEffect } from 'react'
import { HashRouter, BrowserRouter as Router, Route } from 'react-router-dom';

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

    function shuffle(array) {
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

    const renderLoad = () => {
      if (isBusy) {
        return <div>Loading</div>;
      } else {
        return (
          <>
          <HashRouter basename='/'>
            <Route exact path="/cards" >
              {cards.map((card) => <CardContainer props={card}/>)}
            </Route>
            <Route exact path="/readings" >
              {shuffle(cards).map((card) => <ReadingContainer props={card}/>)}
            </Route>
          </HashRouter>
          </>
        )
      }
    }
  
  return (
    <Router>
      <div className="App">
            {renderLoad()}      
      </div>
    </Router>
  );
}

export default App;
