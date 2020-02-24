import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <div>
                {/* <h4>{this.props.name}</h4> */}
                <h4>{this.props.render(false)}</h4>
            </div>
        )
    }
}

export default User;
