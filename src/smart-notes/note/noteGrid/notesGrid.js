import React, { Component } from 'react';
import Note from './note';
import Masonry from 'masonry-layout';


class NotesGrid extends Component {

    componentDidMount() {
        const grid = this.refs.grid;
        this.msnry = new Masonry(grid, {
            itemSelector: '.note',
            columnWidth: 200,
            gutter: 10,
            isFitWidth: true
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.notes.length !== prevProps.notes.length) {
            this.msnry.reloadItems();
            this.msnry.layout();
        }
    }


    render() {
        const onNotesDelete = this.props.onNoteDelete;
        const onNoteChange = this.props.onNoteChange
        return (
            <div className="note-grid" ref="grid" >
                {
                    this.props.notes.map((note, idx) => {
                        return (
                            <div>
                            <Note 
                            key={idx}
                            onDelete={onNotesDelete.bind(null, note)}
                            color={note.color}
                            seconds={note.seconds}
                            onNoteChange={onNoteChange.bind(null, note)}
                            >{note.text}
                            </Note>
                           
                            </div>                            
                        );
                    })
                }
            </div>
        );
    }
}

export default NotesGrid;
