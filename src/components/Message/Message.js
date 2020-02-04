import React, { Component } from 'react';

class Message extends Component{

    constructor(){
        super();
        this.state = {
            message: "Welcome Message"
        }
    }

    changeMessage(){
        this.setState({
            message: 'Thank you for subscription!!!'
        })
    }

    render(){
        return(
            <div>
                <p>{this.state.message}</p>
                <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message;