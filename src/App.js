import ReadingsContainer from './containers/readingsContainer'
import React, { useState, useEffect } from 'react'
import { HashRouter, Route, Link } from 'react-router-dom';
import Login from './components/login'
import Header from './components/header'
import CardsIndex from './containers/cardsIndex'
import CardFilter from './components/cardFilter';
import {BASE_URL} from './index'

function App() {
  const [cards, setCards] = useState([])
  const [isBusy, setBusy] = useState(true)
  
  useEffect(
    () => {
      fetch(BASE_URL+'/cards')
        .then(resp => resp.json())
        .then(data =>{ 
              setCards(data.data)
              setBusy(false);})
      },
    [])

    const renderLoad = () => {
      if (isBusy) {
        return <div>Loading</div>;
      } else {
        return (
          <>
            <div >
              <ul className="Navbar">
                <li className="Nav-Item"><Link to="/">Home</Link></li> 
                <li className="Nav-Item"><Link to="/cards">Cards</Link></li>
                <li className="Nav-Item"><Link to="/readings" >Readings</Link></li>
              </ul>
            </div>
            <Header/>
            <Route exact path="/" >
                <Login/>
            </Route>
            <Route exact path="/cards" >
              <CardFilter/>
              <CardsIndex props={cards}/>
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
