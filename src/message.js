import React, { Component } from "react";
import User from "./userContext";
class Message extends Component {
    render(){
        const employee = this.context
        return (
            <p>Welcome to the board {employee}!</p>
        )
    }
}
Message.contextType = User
export default Message