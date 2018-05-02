import React from 'react';

import { makeMove, newGame } from '../logic';

import Message from './message';
import Tile from './tile';

/*
The main game App! It should have a TicTacToe game state in its component state,
and use the Tile and Message components to render the game.

Then the `makeMove` function from the logic layer should be used to update the
game state as the tiles are being clicked.

The user should also be able to reset the game.

The App component should render an outer element with a `container` CSS class,
and all tiles in an element with a `board` CSS class.
*/

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      game: newGame(),
    }
  }

  playerMove(index){
    console.log(index);
  }

  startNewGame() {
    this.setState({
      game: newGame()
    });
    console.log('new game');
  }

  render() {
    return (
      <div className="container">
        <div className="board">
          {this.state.game.board.map((tile, index) => (
            <Tile key={index} value={tile} move={() => this.playerMove(index)}/>
          ))}
          <button onClick={() => this.startNewGame()}>Reset</button>
        </div>
        
      </div> 
    );
  }
}
