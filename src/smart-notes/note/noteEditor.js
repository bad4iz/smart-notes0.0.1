import React, { Component } from 'react';
import ColorInput from './colorInput';

class NoteEditor extends Component {

    state = {
        text: ''
    }

    handleTextChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    handleChangeColor(color) {
        this.setState({ backgroundColor: color });
    }

    handleNoteAdd() {
        if (this.state.text.length) {
            const newNote = {
                text: this.state.text,
                color: this.state.backgroundColor,
                id: Date.now(),
                seconds: 0
            };

            this.setState({ text: '' });

            this.props.onNoteAdd(newNote);
        }
    }


    render() {
        return (
            <div style={{ backgroundColor: this.state.backgroundColor }}
                className="note-editor">
                <ColorInput backgroundColorHandle={this.handleChangeColor.bind(this)} />
                <textarea
                    style={{ backgroundColor: this.state.backgroundColor }}
                    placeholder="Enter you note here"
                    rows={5}
                    className="textarea"
                    value={this.state.text}
                    onChange={this.handleTextChange.bind(this)}
                />
                <button
                    className="add-button"
                    onClick={this.handleNoteAdd.bind(this)}
                >Add
                </button>
                <input type="text" value={this.props.textSearch} onChange={this.props.searching} />
            </div>
        );
    }
}

export default NoteEditor;

