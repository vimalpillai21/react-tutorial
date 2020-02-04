import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    increment(){
        // this.state.count += 1;
        // this.setState({
        //     count: this.state.count + 1
        // },() => {
        //     console.log('callback value - ',this.state.count);
        // });
        // -------------------------------------------------------
        this.setState((prevState,props) => ({
            count: prevState.count + 1
        }));
        console.log(this.state.count);
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    
    render() {
        return (
            <div>
                <p>count: {this.state.count}</p>
                <button onClick={()=>this.incrementFive()}>Increment</button>                 
            </div>
        )
    }
}

export default Counter
