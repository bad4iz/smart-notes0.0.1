import React, {Component} from 'react';
import ColorInput from './colorInput';

class NoteEditor extends Component {
    render() {
        return (
            <div className="noteEditor">
                <ColorInput/>
                <textarea rows={5} placeholder="Enter you note here"></textarea>
                <button className="add-button">Add</button>
            </div>
        );
    }
}

export default NoteEditor;
