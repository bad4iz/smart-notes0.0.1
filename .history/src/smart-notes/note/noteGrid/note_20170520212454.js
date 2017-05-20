import React, { Component } from 'react';
import Timer from './timer';

class Note extends Component {

    constructor(props) {
        super(props);
        this.state = {
            seconds: this.props.seconds,
            warn: false
        };
    }
    noteChange(sec) {
        this.props.onNoteChange({seconds: sec});
    }

    warning() {    
        console.log('dddddddddddddddd');
        
        this.setState({
            warn: !this.warn
        });
    }

    render() {
        // const noteChange = this.props.onNoteChange;
        return (
            <div className={'note' + (this.state.warn ? ' warning ' : ' ')} style={{ backgroundColor: this.props.color }} >
                <span className="delete-note"
                    onClick={this.props.onDelete}
                >x</span>
                <p >{this.props.children}</p>
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
