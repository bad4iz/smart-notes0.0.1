import React, {Component} from 'react';
import Note from './note';

class NotesGrid extends Component {
    render() {
        return (
            <div className="note-grid" ref="grid" >
                {
                    this.props.notes.map((node, idx)=>{
                        return (
                            <Note key={idx}>{node.text}</Note>
                        );
                    })
                }
            </div>
        );
    }
}

export default NotesGrid;
