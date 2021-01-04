import React from 'react';
import "./Puntuacion.css";

export default class Puntuacion extends React.Component {
    render() {
        return (
            <div class="Puntuacion">

                <h1 id="infoScore">     Tu puntuación final es: {this.props.score} </h1>
                
                <div className='buttons'>
                    <button id='tryAgain' onClick={() => { this.props.onChangeQuiz(-1); }}>Inténtalo de nuevo</button>
                </div>
            </div>
        );
    }
}