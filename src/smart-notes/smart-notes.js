import React, {Component} from 'react';
// import logo from '../logo.svg';
// import '../App.css';

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
        this.serState( {notes: newNotes} );
    }

    _updateLocalStorage() {
        const notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    }
    render() {
        return (
            <div className="notes-app">
                <h2>NoteEditor</h2>
                <h2>NotesGrid</h2>
            </div>
        );
    }
}

export default SmartNotes;
