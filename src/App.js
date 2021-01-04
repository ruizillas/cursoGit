import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Game from "./Game";
import Puntuacion from "./Puntuacion";
import Lista from "./ListaQuizzes";
import { questionAnswer } from './redux/actions';
//import GlobalState from './redux/reducers';

class App extends Component {

  componentDidMount() {

    let token = "el token que sea";
    let url = "https://quiz.dit.upm.es/api/quizzes/random10wa?token=" + token;
    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.props.dispatch(initQuizzes(json))
      })
      .catch(error => {
        console.log(error)
      });

  }

  render() {
    if (this.props.finished !== false) {
      return (
        <div>
          <Puntuacion score={this.props.score}
            finished={this.props.finished}
          />
        </div>
      );

    } else {
      return (

        <div className="App">
          <Game
            quiz={this.props.quizzes[this.props.currentQuiz]}
            onQuestionAnswer={(answer) => { this.props.dispatch(questionAnswer(this.props.currentQuiz, answer)) }}
          />


        </div>
      );
    }
  }
}


function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(App);


/*function App(props) {
  return (
    <div className= "App">
      <Game quiz={props.quizzes[props.currentQuiz]}
        onQuestionAnswer={(answer)=>{props.dispatch(questionAnswer(props.currentQuiz, answer))}}
        score={GlobalState.score}/>


    </div>
  );
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(App); */

