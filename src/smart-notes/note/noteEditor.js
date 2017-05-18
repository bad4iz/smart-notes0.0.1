import React, { Component } from 'react';
import ColorInput from './colorInput';

class NoteEditor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
    }
    handleTextChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    handleNoteAdd() {
        if (this.state.text.length) {
            const newNote = {
                text: this.state.text,
                color: this.state.backgroundColor,
                id: Date.now(),
                seconds: 0
            };

            this.setState({ text: ''});

            this.props.onNoteAdd(newNote);
        }
    }


    render() {
        return (
            <div className=" note-editor">
                <ColorInput />
                <textarea
                    className="textarea"
                    rows={5}
                    placeholder="Enter you note here"
                    value={this.state.text}
                    onChange={this.handleTextChange.bind(this)}
                />
                <button
                    className="add-button"
                    onClick={this.handleNoteAdd.bind(this)}
                >Add</button>
            </div>
        );
    }
}

export default NoteEditor;

