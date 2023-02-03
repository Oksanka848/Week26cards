import React from 'react';
import './App.css';
import './components/Card.css';
import Card from './components/Card';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        {
          cards.map((card) =>
            <Card name={card.name} avatar={card.avatar} univers={card.univers} alterago={card.alterago} job={card.job} friens={card.friens} powers={card.powers}>
            </Card>
          )
        }
      </div>
    );
  }
}

export default App;
