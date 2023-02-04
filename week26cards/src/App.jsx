import React from 'react';
import './App.css';
import './components/Card.css';
import Card from './components/Card';
import cards from './components/hero.json';

export default class App extends React.Component {
    render() {
    return (
      <div className="App">
        {
          cards.map((card) =>
            <Card key={card.id} name={card.name} avatar={card.avatar} univers={card.univers} alterago={card.alterago} job={card.job} friens={card.friens} powers={card.powers}>
            </Card>
          )
        }
      </div>
    );
  }
}

