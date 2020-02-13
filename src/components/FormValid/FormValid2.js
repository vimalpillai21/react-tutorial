import React, { Component } from 'react';


class FormValid2 extends Component{
    constructor(props){
        super(props);
        this.state = {
           username: "vimal",
           comments: "",
           topic: "react"
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
    }

    handleUsernameChange(event){
        this.setState({
            username: event.target.value
        })
        // console.log(this.state);
    }

    commentChangeHandler = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(this.state));
    }

    render(){
        const { username, comments, topic } = this.state;
        return (
            <div align="center">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>&nbsp;
                        <input name="username" value={username}
                            onChange={this.handleUsernameChange}
                            id="username" type="text" /><br />
                        {/* <span>{this.state.username}</span> */}
                    </div>
                    <div>
                        <label htmlFor="comments">Comments</label>&nbsp;
                        <textarea value={comments} onChange={this.commentChangeHandler}></textarea>
                        <br />
                    </div>
                    <div>
                        <label htmlFor="topics">Topics</label>&nbsp;
                        <select value={topic} onChange={this.handleTopicChange}>
                            <option value="angular">Angular</option>
                            <option value="react">React</option>
                            <option value="vue">Vue</option>
                        </select>
                        <br />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default FormValid2;