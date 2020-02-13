import React, { Component } from 'react';

class API extends Component {
    constructor(){
        super();
        this.state = {
            name : "hello world",
            date: null
        }
        this.forceUpdateState = this.forceUpdateState.bind(this);
        setInterval(() => {
            this.setState({
                date: new Date().getSeconds()
            })
        },1000);
    }

    forceUpdateState(){
        this.forceUpdate();
    }


    componentWillUpdate(nextProps, nextState) {
        // console.log('Component WILL UPDATE!');
        // console.log(nextProps);
        // console.log("--------------");
        // console.log(nextState);
     }

    render(){
        return(
        <div>
            <h1>Current Minute and Seconds</h1>
            <h3>Time is {new Date().getMinutes() + ":" + new Date().getSeconds() + ":" + new Date().getHours()}</h3>
            <h4>{this.state.date}</h4>
            <button onClick={this.forceUpdateState}>Update</button>
        </div>
        );
    }
}

export default API;