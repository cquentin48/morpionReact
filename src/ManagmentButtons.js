import React, { Component } from 'react';

class GameTableBoard extends Component {
    handleRazButtonClick(e){
        console.log("Fonction de réinitialisation du plateau appelée...");
        this.props.razBoardOnClick();
      }


      handleRazScoresButtonClick(e){
        console.log("Fonction de réinitialisation du plateau appelée...");
        this.props.razScoresOnClick();
      }
    
    render(){
        return(
        <tbody>
            <tr>
                <td>
                    <input type="button" onClick={this.handleRazButtonClick.bind(this)} value="Réinitialiser le plateau"/>
                    <input type="button" onClick={this.handleRazScoresButtonClick.bind(this)} value="Réinitialiser les scores"/>
                </td>
            </tr>
        </tbody>
        )
    }
}

export default GameTableBoard