import React from 'react';
import './App.css';
import GameDisplay from './Components/GameDisplay';
import TopBarMenu from './Components/TopBarMenu';
import GameState from './GameLogic/GameState';

interface appProps{ inGameState: GameState}

function App(props:appProps) {
  return (
    <div className="_outerFrame">
      <TopBarMenu/>
      <GameDisplay gameState={props.inGameState}/>
    </div>
  );
}

export default App;
