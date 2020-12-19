import React from 'react';
import './Game.css';
export default class Game extends React.Component {
	render() {
		return (
			<div className="Game">

				<div>
					<p>{this.props.quiz.author.profileName}</p>
					<img height='50' width='50' src={this.props.quiz.author.photo.url} alt='Caracola' />

				</div>
				<h1>{this.props.quiz.question}</h1>
				<div>
					<img id='Imagen' height='300' width='500' src={this.props.quiz.attachment.url} alt='Hola' />
				</div>
				<input type="text"
					placeholder='Escriba su respuesta'
					value={this.props.quiz.userAnswer || ''}
					onChange={(e) => this.props.onQuestionAnswer(e.target.value)} />



				<div >

					<button id='Anterior' onClick={() => { this.props.onChangeQuiz(-1); }}>Anterior</button>
					<button id='Submit' onClick={() => { this.props.onSubmit(); }}>Submit</button>
					<button id='Siguiente' onClick={() => { this.props.onChangeQuiz(1); }}>Siguiente</button>
				</div>
			</div>
		);
	}
}