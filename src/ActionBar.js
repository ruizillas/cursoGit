import React from 'react';
import './ActionBar.css'
export default class ActionBar extends React.Component {
    render() {
        return (
            <div className="ActionBar">
                <div className='buttons'>

                    <button id='Anterior' onClick={() => { this.props.onChangeQuiz(-1); }}>Anterior</button>
                    <button id='Submit' onClick={() => { this.props.onSubmit(); }}>Submit</button>
                    <button id='Siguiente' onClick={() => { this.props.onChangeQuiz(1); }}>Siguiente</button>
                    <button id='Reset' onClick={() => { this.props.onChangeQuiz(1); }}>Reset</button>
                </div>
               
            </div >
        )
    }
}