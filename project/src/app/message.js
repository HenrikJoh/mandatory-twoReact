/*
The Message component expects to be passed...
- state: a game state string (plr1,plr2,plr1won,plr2won,draw)

The component will then render an appropriate message.
*/

import React from 'react';



export default function Message(props){
  const draw = props.game.board.includes(0);

let text;

if(props.game.player === 'plr1') {
  text = 'Player 1 turn';
} if (props.game.player === 'plr2') {
  text = 'Player 2 turn';
}  if (draw === false) {
  text = 'Draw';
} if (props.game.line.length > 0 && props.game.player === 'plr1') {
  text = 'Player 2 won';
} if (props.game.line.length > 0 && props.game.player === 'plr2') {
  text = 'Player 1 won';
} 

  return (
    <div>{text}</div>
  );
}
