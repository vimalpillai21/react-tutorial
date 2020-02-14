import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';
class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Hello World"
        }
        console.log("LifeCycle A consrtuctor");
    }
    
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycle getDerivedStateFromProps");
        return null
    }

    componentDidMount(){
        console.log("Component Did Mount executed");
    }

    shouldComponentUpdate(){
        console.log("LifecycleA should component update method");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifeCycleA getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(){
        console.log("LifecycleA componentDidUpdate");
    }

    changeState = () => {
        this.setState({
            name: "Skyrim"
        })
    }

    render() {
        console.log("Render");
        return (
            <div>
                Render
                <LifeCycleB />
                <button onClick={this.changeState}>Button</button>
            </div>
        )
    }

}

export default LifeCycleA
