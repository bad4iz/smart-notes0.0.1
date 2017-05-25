import React, { Component } from 'react';
import Todo from './todo';

class TodoList extends Component {

    state = {
        list: this.props.todoList || [],
        text: ''
    };

    handleTodoAdd = (value) => {
        this.setState({
            text: value.target.value
        });
    }

    componentDidUpdate() {
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            if (this.state.text.length) {
                const newTodo = {
                    text: this.state.text,
                    id: Date.now()
                };

                this.setState({ text: '' });
                const newList = this.state.list.slice();

                newList.unshift(newTodo);
                this.setState({ list: newList });

                this.props.onChange(this.state.list);        
            }
        }
    }

    render() {
        return (
            <div>
                <input type="text" name="todo" value={this.state.text} onChange={this.handleTodoAdd} onKeyPress={this.handleKeyPress} />
                {
                    this.state.list.map((todo) => {
                        return (
                            <Todo key={todo.id}>{todo.text}</Todo>
                        );
                    })
                }
            </div>
        );
    }
}

export default TodoList;
