import React, { Component } from 'react';


class Welcome extends Component{
    render(){
    const {name, heroName} = this.props;
    // const {state1,state2} = this.state;
    return (
    <div>
        {/* <h5>Welcome {this.props.name} a.k.a {this.props.heroName}</h5> */}
        <h5>Welcome {name} a.k.a {heroName}</h5>
    <p>{this.props.children}</p>
    </div>
    );
    }
}

export default Welcome;