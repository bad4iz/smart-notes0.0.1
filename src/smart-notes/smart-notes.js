import React, {Component} from 'react';
import NoteEditor from './note/noteEditor';
import NotesGrid from './note/noteGrid/notesGrid';
import './smartNotes.css';

class SmartNotes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: []
        };
    }

    componentDidMount() {
        const localNotes = JSON.parse(localStorage.getItem('notes'));
        if (localNotes) {
            this.setState( {notes: localNotes} );
        }
    }

    componentDidUpdate() {
        this._updateLocalStorage();
    }

    handleNoteAdd(newNote) {
        const newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState( {notes: newNotes} );
    }

    _updateLocalStorage() {
        const notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    }
    render() {
        return (
            <div className="notes-app">
                <NoteEditor onNoteAdd={this.handleNoteAdd.bind(this)} />
                <NotesGrid 
                notes={this.state.notes}
                />
            </div>
        );
    }
}

export default SmartNotes;
