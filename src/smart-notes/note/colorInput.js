import React from 'react';

export class ColorInput extends React.Component {
    
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
            ],
            color: 'red'
        };
    }

    handleChangeColor(event) {
        this.props.backgroundColorHandle(event.target.dataset.color);
    }

    render() {
        const backgr = this.props.backgroundColor;
        return (
            <div style={{backgroundColor: backgr}} className="colorInput">
                <ul className="colorInput" onChange={this.handleChangeColor.bind(this)}>
                    {
                        this.state.colors.map((item, idx) => {
                            return (
                                <li key={idx} style={{backgroundColor: item.color}}>
                                    <input className="radio" type="radio"  id={idx} name="colorInput" data-color={item.color}/>
                                    <label htmlFor={idx}> &#10003; </label>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}
