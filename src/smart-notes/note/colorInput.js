import React, {Component} from 'react';

class ColorInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colors: [
                {
                    id: 1,
                    color: 'red'
                },
                {
                    id: 2,
                    color: 'yellow'
                },
                {
                    id: 3,
                    color: 'green'
                },
                {
                    id: 4,
                    color: 'blue'
                },
                {
                    id: 5,
                    color: 'gold'
                }
            ]
        };
    }

    render() {
        return (
            <div className="colorInput">
                <ul>
                    {
                        this.state.colors.map((item, idx)=>{
                            return (
                                <li key={idx} style={{backgroundColor: item.color}} >
                                   <input type/>
                                   <span> &#10003;</span>
                                    </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default ColorInput;
