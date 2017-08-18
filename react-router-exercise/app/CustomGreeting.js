import React, { Component } from 'react';
import Form from './Form';
import GreetingPresentational from './GreetingPresentational';

class CustomGreeting extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      type: "greeting",
      toCard: []
    }
    this.handleName = this.handleName.bind(this)
    this.handleType = this.handleType.bind(this)
    this.handleSubmission = this.handleSubmission.bind(this)
    this.clearForm = this.clearForm.bind(this)
  }

  handleName(event){
    let newName = event.target.value
    this.setState({ name: newName })
  }

  handleType(event){
    let newType = event.target.value
    this.setState({ type: newType })
  }

  clearForm() {
    debugger
    this.setState({name: ""})
  } 

  handleSubmission(event){
    event.preventDefault()
    let original = this.state.toCard
    let message

    if (this.state.type === "greeting"){
      message = "Hello my friend "
    } else {
      message = "Goodbye my friend "
    }

    message = message + this.state.name
    original.push(message)
    this.setState({toCard: original})
    this.clearForm()
  }


  render(){
    let message;

    if (this.state.type === "greeting"){
      message = "Hello my friend "
    } else {
      message = "Goodbye my friend "
    }

    return(
      <div className="custom-greeting">
        <h1>Custom Greeting Generator</h1>
        <Form
           handleType={this.handleType}
           handleName={this.handleName}
           onSubmit={this.handleSubmission}
           name={this.state.name}/>
        <p>{message}{this.state.name}</p>
        < GreetingPresentational
          greetings={this.state.toCard}
         />
      </div>
    )
  }
}

export default CustomGreeting;
