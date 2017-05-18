import React, {Component} from 'react';

class Note extends Component {
    render() {
        return (
           <div className="note">
               <span className="delete-note" >x</span>
                <p>{this.props.children}</p>
            </div>
        );
    }
}

export default Note;
