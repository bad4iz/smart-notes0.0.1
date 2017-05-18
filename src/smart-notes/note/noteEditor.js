import React, {Component} from 'react';
import './noteEditor.css';

class NoteEditor extends Component {
    render() {
        return (
            <div className="noteEditor">
              <div>selected colors note</div>
                <textarea rows={5} placeholder="Enter you note here"></textarea>
                <button className="add-button">Add</button>
            </div>
        );
    }
}

export default NoteEditor;
