import React, { Component } from 'react';

const initialState = {
    name: "",
    email: "",
    password: "",
    nameError: "",
    emailError: "",
    passwordError: ""
}

class FormValid extends Component{
    constructor(props){
        super(props);
        this.state = initialState;
        this.validate = this.validate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validate(){
        // debugger;
        let nameError = "";
        let emailError = "";
        // let passwordError = ""; 
        if(!this.state.name){
            nameError  = "name cannot be blank!!"
        }
        if(!this.state.email.includes('@')){
            emailError = 'invalid email !!'
        }
        if(emailError || nameError ){
            this.setState({emailError, nameError});
            return false;
        } else {
            this.setState({emailError: ""});
        }
        return true;
    }

    handleChange(event){
        console.log(event.target.value);
        if(event.target.name === 'name'){
            this.setState({
                name: event.target.value
            })
        }
        else if(event.target.name === 'email'){
            this.setState({
                email: event.target.value
            })
        }
        else{
            this.setState({
                password: event.target.value
            })
        }
    }

    handleSubmit(event){
        event.preventDefault();
        const isValid = this.validate();
        if(!isValid){
            console.log(this.state);
            console.log("---------------------------");
        } else{
            this.setState({
                name: "",
                email: "",
                password: "",
                nameError: "",
                emailError: "",
                passwordError: ""
            });
            console.log(this.state);
        }
    }

    render(){
        return (
            <div align="center">
                <form>
                    <div>
                        <input name="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange} />
                        <div style={{ fontSize:12,color:'red'}}>{this.state.nameError}</div>
                    </div>
                    <div>
                        <input name="email" placeholder="email"
                        value={this.state.email}
                        onChange={this.handleChange} />
                        <div style={{ fontSize:12,color:'red'}}>{this.state.emailError}</div>
                    </div>
                    <div>
                        <input name="password" placeholder="password" type="password"
                        value={this.state.password}
                        onChange={this.handleChange} />
                        <div style={{ fontSize:12,color:'red'}}>{this.state.passwordError}</div>
                    </div>
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default FormValid;