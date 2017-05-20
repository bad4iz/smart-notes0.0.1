import React, { Component } from 'react';

class Timer extends Component {
    state = {
        seconds: this.props.time,
        tim: false
    }

    clearTimer() {
        this.setState({ seconds: 0 });
        this.props.onTimer(0);
    }

    componentDidUpdate() {

    }

    switchTimer = () => {
        console.log('adfasdfas');
        
        if (this.state.tim) {
            this.timer = setInterval(this.tick, 1000);
        } else {
            clearInterval(this.timer);
            this.props.onTimer(this.state.seconds);
        }
    }

    switch() {
        this.setState({
            tim: !this.state.tim
        });
    }

    render() {
        return (
            <div >
                <h4>
                    Уже прошло {this.state.seconds} секунд
                </h4>
                <button
                    className="timer red"
                    onClick={this.clearTimer.bind(this)}>Clear</button>
                <button
                    className="timer green"
                    onClick={this.switchTimer}
                >{this.state.tim
                    ? 'Pause'
                    : 'Play'}</button>
            </div>
        );
    }
}

export default Timer;
