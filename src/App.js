import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      friends:[],
      picture:"",
      name:""
    }
    this.inputChange = this.inputChange.bind(this);
    this.addFriend = this.addFriend.bind(this);
  }

  inputChange(e){
    this.setState({[e.target.name]:e.target.value});
  }
  addFriend(){
    let friendsArray = this.state.friends.slice();
    friendsArray.push({
      picture:this.state.picture,
      name:this.state.name
    })
    this.setState({friends:friendsArray})
  }

  render() {
    console.log(this.state)
    const friends = this.state.friends.map(obj=>(
      <div>
        <img src={obj.picture}/>
        <span>{obj.name}</span>
      </div>
    ));
    return (
      <div className="App">
        <label>Picture: </label>
        <input name="picture" onChange={this.inputChange}/>
        <label>Name: </label>
        <input name="name" onChange={this.inputChange}/>
        <button onClick={this.addFriend}>Add Friend</button>
        {friends}
      </div>
    );
  }
}

export default App;
