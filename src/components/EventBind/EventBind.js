import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello"
        }
        // Best option according to React Documentation
        // this.clickHandler = this.clickHandler.bind(this);
    }
    

    // clickHandler(){
    //     this.setState({
    //         message: 'GoodBye'
    //     })
    //     console.log(this);
    // }

    // Method Four -- Experimental Feature
    clickHandler = () => {
        this.setState({
            message: 'GoodBye'
        });
    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.clickHandler()}>Click</button>                 */}
                <button onClick={this.clickHandler}>Click</button>                
            </div>
        )
    }
}

export default EventBind
