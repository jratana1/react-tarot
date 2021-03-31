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
      // fetch('https://safe-cove-73377.herokuapp.com/api/v1/cards')
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
