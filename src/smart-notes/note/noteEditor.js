import React, { Component } from 'react';
import ColorInput from './colorInput';

class NoteEditor extends Component {

    state = {
        text: '',

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
                seconds: 0,
                isDone: false
            };

            this.setState({ text: '' });

            this.props.onNoteAdd(newNote);
        }
    }


    render() {
        return (
            <div style={{ backgroundColor: this.state.backgroundColor }}
                className="note-editor">
                <div className="search">
                    <input className="" type="text" value={this.props.textSearch} onChange={this.props.searching} />
                    <span>&#128269;</span>
                </div>
                <div className="searchChecked">
                    
                        <input
                            className="searchChecked__checkbox"
                            id={'searchChecked'} type="checkbox"
                        />
                        <label htmlFor={'searchChecked'}>completed notes</label>
                        <input
                            className="searchChecked__checkbox"
                            id={'searchNoChecked'} type="checkbox"
                        />
                        <label htmlFor={'searchNoChecked'}> not completed notes </label>
                </div>
                
                <textarea
                    style={{ backgroundColor: this.state.backgroundColor }}
                    placeholder="Enter you note here"
                    rows={5}
                    className="textarea"
                    value={this.state.text}
                    onChange={this.handleTextChange.bind(this)}
                />
                <div className="footer">
                    <ColorInput backgroundColorHandle={this.handleChangeColor.bind(this)} />
                    <button
                        className="add-button"
                        onClick={this.handleNoteAdd.bind(this)}
                    >Add
                </button>
                </div>
            </div>
        );
    }
}

export default NoteEditor;

