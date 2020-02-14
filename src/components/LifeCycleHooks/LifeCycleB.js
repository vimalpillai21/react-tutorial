import React, { Component } from 'react';

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Hello World"
        }
        console.log("LifeCycle B consrtuctor");
    }
    
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleB getDerivedStateFromProps");
        return null
    }

    componentDidMount(){
        console.log("ComponentB Did Mount executed");
    }

    shouldComponentUpdate(){
        console.log("LifecycleB should component update method");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifeCycleB getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(){
        console.log("LifecycleB componentDidUpdate");
    }

    render() {
        console.log("Render");
        return (
            <div>
                RenderB
            </div>
        )
    }
}

export default LifeCycleB;
