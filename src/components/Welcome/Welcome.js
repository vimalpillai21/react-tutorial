import React, { Component } from 'react';


class Welcome extends Component{
    render(){
    return (
    <div>
        <h5>Welcome {this.props.name} a.k.a {this.props.heroName}</h5>
    <p>{this.props.children}</p>
    </div>
    );
    }
}

export default Welcome;