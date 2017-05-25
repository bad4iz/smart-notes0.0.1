import React, { Component } from 'react';

class Todo extends Component {
    state = { 
        todoText: '',
        done: this.props.done || false
    };

    render() {
        return (
            <div className={ this.state.done ? ' done ' : ''}>{this.props.children}</div>
        );
    }
}

export default Todo;
