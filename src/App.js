import React, { Component } from 'react';
import './App.css';
import GameTableBoard from './GameTableBoard';
import GameBoardStatus from './GameBoardStatus';
import ManagmentButtons from './ManagmentButtons';

class App extends Component {
  /**
   * Constructeur de classe
   */
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

  /**
   * Fonction de gestion du clic de la souris avec la cellule d'un tableau
   */
  handleClickEvent = (x,y)=>{
    let currentGameStatus = this.state.gamestatus;
    if(currentGameStatus === -1){
      let newGameBoard = this.cloneGameBoard(this.state.gameBoard);
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
      console.log(this.state.gameBoard);

      let currentGameStatus = this.checkForWinner();

      this.setState({
        gamestatus:currentGameStatus
      })
    }else{
      alert("Vous ne pouvez pas jouer : la partie est finie!");
    }
  }

  /**
   * Fonction de clonage d'un tableau
   * @param {le tableau à recopier} refTable 
   */
  cloneGameBoard(refTable) {
    let newTable = [];
    for(let i =0;i<3;i++){
      newTable[i] = [];
      for(let j=0;j<3;j++){
        newTable[i][j] = refTable[i][j];
      }
    }
    return newTable;
  }
  
  /**
   * Fonction de recherche du gagnant
   */
  checkForWinner(){
    const newGameTableBoard = this.cloneGameBoard(this.state.gameBoard);

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

  /**
   * Vérifie si le tableau est remplit
   * @returns {true} le tableau est remplit, {false} sinon
   */
  isGameTableFilled(){
    for(let i = 0;i<3;i++){
      for(let j = 0 ;j<3;j++){
        if(this.state.gameBoard[i][j] == ''){
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Vérifie le statut du jeu
   * @param {le statut du jeu} gameStatus 
   */
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

  /**
   * Fonction de gestion du boutton de remise à zéro
   * @wip
   */
  razBoardButtonHandler(){
    let newGameBoard=[
      ["","",""],
      ["","",""],
      ["","",""]
    ]
    this.setState({
      gameBoard:newGameBoard
    })
  }

  razScores(){
    
  }

  /**
   * Affichage de la classe
   */
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
          <ManagmentButtons razScoresOnClick={this.razScores} razBoardOnClick={this.razBoardButtonHandler}/>                 
        </header>
      </div>
    );
  }
}

export default App;
