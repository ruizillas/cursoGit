import React from 'react';
import './Game.css';
import { connect } from 'react-redux';
import ActionBar from './ActionBar';
import { changeQuiz, submit } from './redux/actions';
export class Game extends React.Component {
	render() {
		return (
			<div className="Game">


				<section class='fotoAutor'>
					<p>{this.props.quiz.author.profileName}</p>
					<img id='santi' src={this.props.quiz.author.photo.url} alt='Caracola' />

				</section>

				<section class='imagenPregunta'>
					<h1>{this.props.quiz.question}</h1>
					<img id='Imagen' src={this.props.quiz.attachment.url} alt='Hola' />

					
				</section>
				<article class='Respuesta'>
					<input type="text"
					placeholder='Escriba su respuesta'
					value={this.props.quiz.userAnswer || ''}
					onChange={(e) => this.props.onQuestionAnswer(e.target.value)} />
				</article>
				<ActionBar onChangeQuiz={(n) => { this.props.dispatch(changeQuiz(this.props.currentQuiz + n)) }}
					onSubmit={() => { this.props.dispatch(submit(this.props.quizzes)) }}
					score={this.props.score}
					 />
				
				

			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		...state
	};
}

export default connect(mapStateToProps)(Game);