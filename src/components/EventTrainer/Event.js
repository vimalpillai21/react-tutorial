import React, { Component } from 'react';
import AppValid from '../AppValid/AppValid';

class Event extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: "qwerty"
        }
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(event){
        this.setState({
            text: event.target.value
        })
    }

    render(){
        return (
            <div>
                <AppValid />
                <p>{this.state.text}</p>
                <input type="text" maxLength="20" onChange={this.changeHandler} value={this.state.text} />
            </div>
        );
    }

}

export default Event;