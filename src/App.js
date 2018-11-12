import React, { Component } from 'react';
import './App.css';
import GameTableBoard from './GameTableBoard';
import GameBoardStatus from './GameBoardStatus'

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentPlayer:0,
      gameBoard:[
        ["","",""],
        ["","",""],
        ["","",""]
      ],
      gamestatus:-1,
      winner:-1,
      loser:-1,
      isFinished:false
    }
  }

  handleClickEvent = (x,y)=>{
    let currentGameStatus = this.state.gamestatus;
    if(currentGameStatus === -1){
      let newGameBoard = this.updateBoard(this.state.gameBoard);
      let updatedCurrentPlayer = this.state.currentPlayer;

      if(this.state.currentPlayer === 0){
        newGameBoard[x][y] = 'X';
      }else if(this.state.currentPlayer === 1){
        newGameBoard[x][y] = 'O';
      }else{
        newGameBoard[x][y] = '';
      }
      
      if(updatedCurrentPlayer === 0){
        updatedCurrentPlayer = 1;
      }else{
        updatedCurrentPlayer = 0;
      }
  
      this.setState({
        gameBoard:newGameBoard,
        currentPlayer:updatedCurrentPlayer
      })

      let currentGameStatus = this.checkForWinner();

      this.setState({
        gamestatus:currentGameStatus
      })
    }else{
      alert("Vous ne pouvez pas jouer : la partie est finie!");
    }
  }

  updateBoard(refTable) {
    let newTable = new Array();
    for(let i =0;i<3;i++){
      newTable[i] = new Array();
      for(let j=0;j<3;j++){
        newTable[i][j] = refTable[i][j];
      }
    }
    return newTable;
  }
  
  checkForWinner(){
    const newGameTableBoard = this.updateBoard(this.state.gameBoard);
    for(let i = 0;i<3;i++){
      let gameLine = newGameTableBoard[i];
    }
    for(let i = 0;i<3;i++){
      let gameLine = newGameTableBoard[i];
      if(gameLine[0].innerHTML === gameLine[1].innerHTML === gameLine[2].innerHTML && gameLine[0].innerHTML!== ''){
        console.log("Victoire par la ligne "+i);
        return 0;
      }
    }

    for(let i=0;i<3;i++){
      if(newGameTableBoard[0][i] === newGameTableBoard[1][i] === newGameTableBoard[2][i] && newGameTableBoard[0][i]!== ''){
        console.log("Victoire par la colonne "+i);
        return 0;
      }
    }
    if(newGameTableBoard[0][0] === newGameTableBoard[1][1] === newGameTableBoard[2][2] && newGameTableBoard[0][0]!== ''){
      console.log("Victoire en diagonale");
      return 0;
    }
    else if(newGameTableBoard[0][2] === newGameTableBoard[1][1] === newGameTableBoard[2][0] && newGameTableBoard[1][1]!== ''){
      console.log("Victoire en diagonale inversée");
      return 0;
    }else{
      console.log("Suite de la partie");
      return -1;
    }
  }

  updateStatus(gameStatus){
    let winnerPlayer;
    let looserPlayer;
    if(gameStatus != 2){
      if(this.state.currentPlayer == 0){
        winnerPlayer = 0;
        looserPlayer = 1;
      }else{
        winnerPlayer = 1;
        looserPlayer = 0;
      }
    }
    let isFinishedGame = true;
    this.setState({
      winner:winnerPlayer,
      looser:looserPlayer,
      isFinished : isFinishedGame
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <GameTableBoard board={this.state.gameBoard} onClick={this.handleClickEvent}/>
          <GameBoardStatus finished = {this.state.isFinished}
                           winner={this.state.winner}
                           loser={this.state.loser}
                           currentplayer={this.state.currentPlayer}
                           />
        </header>
      </div>
    );
  }
}

export default App;
