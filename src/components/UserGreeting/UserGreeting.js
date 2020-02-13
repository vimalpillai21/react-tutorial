import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    

    // render() {

    //     if(this.state.isLoggedIn){
    //         return <p>Hello Vimal</p>;
    //     } else {
    //         return <p>Hello Guest</p>;
    //     }
    //     return (
    //         <div>
    //             <p>Hello Vimal</p>
    //             <p>Hello Guest</p>
    //         </div>
    //     )
    // }
    // render() {
    //     let message;
    //     if(this.state.isLoggedIn){
    //         message =  <p>Hello Vimal</p>;
    //     } else {
    //         message =  <p>Hello Guest</p>;
    //     }
    //     return (
    //         <div>
    //             {message}
    //         </div>
    //     )
    // }
    
    // render() {
    //     return (
    //         this.state.isLoggedIn ? (<p>Hello Vimal</p>) : (<p>Hello Guest</p>)
    //     )
    // }

    render() {
            return (
                this.state.isLoggedIn && <p>Hello Vimal</p>
            )
        }
}

export default UserGreeting
