import React from "react"
import './App.css';
import User from "./userContext";
import Message from "./message";
class  App extends React.Component {
  static contextType = User
  render(){
    return (
      <div className="App">
        <h1>Hello {this.context}</h1>
        <Message />
      </div>
  );}
}
// App.contextType = User     this is same as line 6
export default App;
