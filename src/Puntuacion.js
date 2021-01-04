import React from 'react';

export default class Puntuacion extends React.Component{
	render(){
		return (
			<div class = "Puntuacion">

			<h1>     Tu puntuacion final es :{this.props.score} </h1>
			<div className='buttons'>
                 <button id='Reset' onClick={() => { this.props.onChangeQuiz(-1); }}>Intentalo de nuevo</button>
            </div>
			</div>
		);
	}
}