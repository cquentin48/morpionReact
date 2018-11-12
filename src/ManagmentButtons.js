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
        <div class = "operationsManagment">
            <h2>Fonctions de gestions pour le jeu</h2>
            <tbody id="operationsManagment">
                <tr>
                    <td>
                        <input type="button" onClick={this.handleRazButtonClick.bind(this)} value="Réinitialiser le plateau"/>
                        <input type="button" onClick={alert('Fonction pas encore ajoutée')} value="Réinitialiser les scores"/>
                        <input type="button" onClick={alert('Fonction pas encore ajoutée')} value = "Enlever dernier coup"/>
                    </td>
                </tr>
            </tbody>
        </div>
        )
    }
}

export default GameTableBoard