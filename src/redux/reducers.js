import { combineReducers } from 'redux';
import { QUESTION_ANSWER, CHANGE_QUIZ, SUBMIT, INIT_QUIZZES } from './actions';

function score(state = 0, action = {}) {
	switch (action.type) {
		case SUBMIT:
			let result = 0;
			action.payload.quizzes.map((quiz) => {
				if (quiz.answer.trim().toLowerCase() === quiz.userAnswer.trim().toLowerCase())
					result += 1;
			})
			return state = result;
		default:
			return state;
	}
}

function finished(state = false, action = {}) {
	switch (action.type) {
		case SUBMIT:
			return state = true;
		default:
			return state;
	}
}

function currentQuiz(state = 0, action = {}) {
	switch (action.type) {
		case CHANGE_QUIZ:
			switch (action.payload) {
				case 0:
					document.getElementById('Anterior').disabled = true;
				case 9:
					document.getElementById('Siguiente').disabled = true;


			}

			if (action.payload !== 0) {
				document.getElementById('Anterior').disabled = false;
			}
			if (action.payload !== 9) {
				document.getElementById('Siguiente').disabled = false;
			}
			return action.payload



		default:
			return state;
	}
}

function quizzes(state = [], action = {}) {
	switch (action.type) {
		case QUESTION_ANSWER:
			return state.map((quiz, i) => {
				return {
					...quiz,
					userAnswer: action.payload.index === i ? action.payload.answer : quiz.userAnswer
				}
			})
		case INIT_QUIZZES:
			return state = action.payload.quizzes
		default:
			return state;
	}
}


const GlobalState = (combineReducers({
	score,
	finished,
	currentQuiz,
	quizzes
}));

export default GlobalState;