import React, { Component } from 'react';
import NoteEditor from './note/noteEditor';
import NotesGrid from './note/noteGrid/notesGrid';
import './smartNotes.css';

class SmartNotes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [],
            textSearch: ''
        };
    }

    componentDidMount() {
        const localNotes = JSON.parse(localStorage.getItem('notes'));
        if (localNotes) {
            this.setState({ notes: localNotes });
        }
    }

    componentDidUpdate() {
        this._updateLocalStorage();
    }

    handleNoteAdd(newNote) {
        const newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({ notes: newNotes });
    }

    _updateLocalStorage() {
        const notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    }

    handleNoteDelete(noted) {
        const noteId = noted.id;

        const newNotes = this.state.notes.filter((note) => {
            return note.id !== noteId;
        });
        this.setState({ notes: newNotes });
    }

    handleNoteColor() {
    }

    handleNoteChange(noted, changes) {
        const noteId = noted.id;
        // const newNotes = this.state.notes.slice();
        this.state.notes.forEach((note) => {
            if (note.id === noteId) {
                note.seconds = changes.seconds;
            }
        });
        this.setState({ notes: this.state.notes });
    }

    searching(event) {
        this.setState({
            textSearch: event.target.value
        });
    }


    render() {
        return (
            <div className="notes-app">
                <NoteEditor
                    textSearch={this.state.textSearch}
                    searching={this.searching.bind(this)}
                    onNoteAdd={this.handleNoteAdd.bind(this)} />
                <NotesGrid
                    notes={this.state.notes.filter((note) => {
                        const searchValue = this.state.textSearch.toLowerCase();
                        return (
                            note.text.indexOf(searchValue) !== -1
                        );
                    })}
                    onNoteDelete={this.handleNoteDelete.bind(this)}
                onNoteChange={this.handleNoteChange.bind(this)}
                />
            </div>
        );
    }
}

export default SmartNotes;
