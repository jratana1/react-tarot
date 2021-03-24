import CardContainer from './containers/cardContainer'
import ReadingsContainer from './containers/readingsContainer'
import React, { useState, useEffect } from 'react'
import { HashRouter, Route, Link } from 'react-router-dom';
import Login from './components/login'
import Header from './components/header'

function App() {
  const [cards, setCards] = useState([])
  const [isBusy, setBusy] = useState(true)
  
  useEffect(
    () => {
      fetch('http://localhost:3000/api/v1/cards')
        .then(resp => resp.json())
        .then(data =>{ 
              setCards(data.data)
              setBusy(false);})
      },
    [])

    // need to make an action and reducer to update state
    // useEffect(
    //   () => {
    //     fetch('http://localhost:3000/api/v1/readings')
    //       .then(resp => resp.json())
    //       .then(data =>{ 

    //             // need to set a user use thunk middleware

    //       })
    //     },
    //   [])

    const renderLoad = () => {
      if (isBusy) {
        return <div>Loading</div>;
      } else {
        return (
          <>
            <li><Link to="/">Home</Link></li> 
            <li><Link to="/cards">Cards</Link></li>
            <li><Link to="/readings" >Readings</Link></li>
            <Header/>
            <Route exact path="/" >
                <Login/>
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
