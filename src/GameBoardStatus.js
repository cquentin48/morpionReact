import React, { Component } from 'react';

class GameBoardStatus extends Component {
  render() {
    if(this.props.finished===true){
      return(
        <div id = "gameBoardStatus">
          <p>Gagnant : </p>
          <p>Perdant : </p>
        </div>
        );
      }else{
          return(
          <div id = "gameBoardStatus">
            <p>Partie en cours !</p>
            <p>Joueur actuel : Joueur n°{this.props.currentplayer+1}</p>
          </div>)
    }
  }
}

export default GameBoardStatus