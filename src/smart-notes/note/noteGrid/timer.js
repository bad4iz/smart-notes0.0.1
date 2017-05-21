import React, { Component } from 'react';

class Timer extends Component {
    state = {
        seconds: this.props.time || 0,
        tim: false
    }

    clearTimer() {
        this.setState({ seconds: 0 });
        this.props.onTimer(0);
    }

    componentDidUpdate() {

    }

    switchTimer = () => {
        this.props.warning();
        if (!this.state.tim) {
            this.timer = setInterval(this.tick, 1000);
            this.switch();
        } else {
            clearInterval(this.timer);
            this.props.onTimer(this.state.seconds);
            this.switch();
        }
    }

    switch() {
        this.setState({
            tim: !this.state.tim
        });
    }

    tick = () => {
        this.setState({ seconds: this.state.seconds + 1 });
    }

    render() {
        return (
            <div >
                <h4>
                    {/*Уже прошло {this.state.seconds} секунд*/}
                </h4>
                <button
                    className="timer red"
                    onClick={this.clearTimer.bind(this)}>Clear</button>
                <button
                    className="timer green"
                    onClick={this.switchTimer}
                >{
                        this.state.tim
                            ? 'Pause'
                            : 'Play'
                    }</button>
            </div>
        );
    }
}

export default Timer;
