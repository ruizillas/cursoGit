import React from 'react';
import './Game.css';
import { connect } from 'react-redux';
import ActionBar from './ActionBar';
import { changeQuiz, submit } from './redux/actions';
export  class Game extends React.Component {
	render() {
		return (
			<div className="Game">


				<div>
					<p>{this.props.quiz.author.profileName}</p>
					<img height='50' width='50' src={this.props.quiz.author.photo.url} alt='Caracola' />

				</div>
				<h1>{this.props.quiz.question}</h1>
				<div>
					<img id='Imagen' src={this.props.quiz.attachment.url} alt='Hola' />
				</div>
				<input type="text"
					placeholder='Escriba su respuesta'
					value={this.props.quiz.userAnswer || ''}
					onChange={(e) => this.props.onQuestionAnswer(e.target.value)} />

				<ActionBar onChangeQuiz={(n) => { this.props.dispatch(changeQuiz(this.props.currentQuiz + n)) }}
					onSubmit={() => { this.props.dispatch(submit(this.props.quizzes)) }} />
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
	  ...state
	};
  }
  
  export default  connect(mapStateToProps)(Game);