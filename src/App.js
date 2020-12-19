import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Game from "./Game";
import { questionAnswer, changeQuiz, submit, initQuizzes } from './redux/actions';



function App(props) {
  return (
    <div className= "App">
      <Game quiz={props.quizzes[props.currentQuiz]}
      	onQuestionAnswer={(answer)=>{props.dispatch(questionAnswer(props.currentQuiz, answer))}}
        onChangeQuiz={(n)=>{props.dispatch(changeQuiz(props.currentQuiz + n))}}
        onSubmit={()=>{props.dispatch(submit(props.quizzes))}}
      	 />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(App);
