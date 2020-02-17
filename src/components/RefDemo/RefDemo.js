import React, { Component } from 'react'

class RefDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
        this.clickHandler = this.clickHandler.bind(this);
        this.cbRef = null;
        this.setCbRef = (element) => {
            this.cbRef = element;
        }
    }
    
    componentDidMount(){
        // console.log(this.inputRef);
        // this.inputRef.current.focus();
        if(this.cdRef){
            this.cdRef.focus();
            console.log(this.cdRef);
        }
    }

    clickHandler(event){
        console.log(this.inputRef.current.value);
    }

    render() {
        return (
            <div align="center">
                <input type="text" ref={this.inputRef} />
                <input type="text" ref={this.setCbRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }
}

export default RefDemo;
