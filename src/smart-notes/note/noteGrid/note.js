import React, { Component } from 'react';
import Timer from './timer';
import TodoList from './todo/todoList';

class Note extends Component {

    state = {
        seconds: this.props.seconds,
        warn: false,
        isDone: this.props.isDone
    }

    noteChange(sec) {
        this.setState({ seconds: sec });
    }

    warning() {
        this.setState({
            warn: !this.state.warn
        });
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('change todo list');
        this.props.onNoteChange(nextState);
    }

    doneSwitching = () => {
        this.setState({ isDone: !this.state.isDone });
    }

    pushTodo(todoList) {
        this.setState({
            todoList: todoList
        });
    }

    render() {
        // const noteChange = this.props.onNoteChange;
        return (
            <div className={'note' + (this.state.warn ? ' warning ' : '')} style={{ backgroundColor: this.props.color }} >
                <span className="delete-note"
                    onClick={this.props.onDelete}>&#128473;</span>
                <p style={{ position: 'relative', margin: 0 }}>
                    <input
                        className="doneCheck"
                        id={'done' + this.props.id} type="checkbox"
                        onChange={this.doneSwitching}
                        checked={this.state.isDone}
                    />
                    <label htmlFor={'done' + this.props.id}> &#10003; </label>
                </p>
                <p className={this.state.isDone ? 'done ' : ''}>{this.props.children}</p>
                <p >Lead time {this.state.seconds}</p>
                <TodoList 
                    onChange={this.pushTodo.bind(this)}
                    todoList={this.props.todoList}/>
                <Timer
                    warning={this.warning.bind(this)}
                    startSeconds={this.props.seconds}
                    onTimer={this.noteChange.bind(this)}
                />
            </div>
        );
    }
}

export default Note;
