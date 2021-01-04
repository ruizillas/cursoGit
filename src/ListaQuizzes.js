import React from 'react';
import './ListaQuizzes.css'

export default class Lista extends React.Component{
	render(){
		return(
				<button
				onClick = {this.props.action} >
				{this.props.quiz+1}
				</button>
		);
	}
}
