import React, {Component} from 'react';

const withCounter = (WrappedComponent, incrementNumber) => {
    class WithCounter extends Component{
        constructor(props) {
            super(props)
        
            this.state = {
                count:0         
            }
            this.incrementCount = this.incrementCount.bind(this);
        }
    
        incrementCount(){
            this.setState(prevState => {
                return {count:prevState.count + incrementNumber}
            });
        }

        render(){
            return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} />
        }
    }
    return WithCounter;
}

export default withCounter;