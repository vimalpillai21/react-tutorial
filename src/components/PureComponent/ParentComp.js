import React, { PureComponent } from 'react'
import PureComp from './PureComp';
import RegComp from './RegComp';
class ParentComp extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Vimal"
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: "Vimal"
            });
        },2000);
    }
    
    render() {
        console.log("---------------ParentComp------------------------------");
        return (
            <div>
                Parent Component
                <PureComp name={this.state.name} />
                <RegComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp
