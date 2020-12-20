import React from 'react';
export default class Game extends React.Component {
    render() {
        return(
        <div className="ActionBar">

            <button id='Anterior' onClick={() => { this.props.onChangeQuiz(-1); }}>Anterior</button>
            <button id='Submit' onClick={() => { this.props.onSubmit(); }}>Submit</button>
            <button id='Siguiente' onClick={() => { this.props.onChangeQuiz(1); }}>Siguiente</button>
        </div>)
    }
}