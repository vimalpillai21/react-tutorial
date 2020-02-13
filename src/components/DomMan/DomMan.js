import React, { Component } from 'react';
// import DOM from 'react-dom';

class DomMan extends Component{
    constructor(props){
        super();
        this.changeBgColor = this.changeBgColor.bind(this);
        this.myRef = React.createRef();
    }

    changeBgColor(){
        console.log(this.myRef);
        let color = this.myRef.current.style.color;
        if(color === 'green'){
            this.myRef.current.style.color = 'yellow';
        } else {
            this.myRef.current.style.color = 'green';
        }
        // this.myRef.current.style.color = 'green';
    }

    render(){
        return (
               <div>
                   <p id="ptag" ref={this.myRef}>hello world</p>
                   <p id="ptag2">hello world</p>
                   <button onClick={this.changeBgColor}>Change Color</button>
               </div>
        );
    }
}

export default DomMan;