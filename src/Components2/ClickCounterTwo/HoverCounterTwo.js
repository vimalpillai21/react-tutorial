import React, { Component } from 'react';

class HoverCounterTwo extends Component {
    constructor(props) {
        super(props);    
        this.state = {
             count: 0
        }
        this.incrementCount = this.incrementCount.bind(this);
    }

    incrementCount(){
        this.setState(prevState => {
            return { count: prevState.count + 1}
        });
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <h3 onMouseOver={this.incrementCount}>Hovered {count} times</h3>                
            </div>
        )
    }
}

export default HoverCounterTwo;
