import React, { Component } from 'react';
import Timer from './timer';

class Note extends Component {

    state = {
        seconds: this.props.seconds,
        warn: false,
        isDone: false
    }

    noteChange(sec) {
        this.props.onNoteChange({ seconds: sec });
    }

    warning() {
        this.setState({
            warn: !this.state.warn
        });
    }

    componentWillUpdate(nextProps, nextState) {
    // в nextProps содержится объект с новыми параметрами
    // в nextState содержится объект с измененным состоянием
        console.log('componentWillUpdate');
    }

    doneSwitching = (val) => {
        this.setState({
            isDone: !this.state.isDone
        });
    }
    render() {
        // const noteChange = this.props.onNoteChange;
        return (
            <div className={'note' + (this.state.warn ? ' warning ' : ' ')} style={{ backgroundColor: this.props.color }} >
                <span className="delete-note"
                    onClick={this.props.onDelete}
                >x</span>
                <input  id="done" type="checkbox" onChange={this.doneSwitching}/>
                <label htmlFor="done">Done</label>
                <p className={this.state.isDone ? 'done ' : ''}>{this.props.children}</p>
                <p >Lead time {this.props.seconds}</p>
                <Timer
                    
                    warning={this.warning.bind(this)}
                    startSeconds={this.props.seconds}
                    onTimer={this.noteChange.bind(this)} />

            </div>
        );
    }
}

export default Note;
