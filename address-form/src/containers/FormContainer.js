import React, { Component } from 'react'
import TextField from '../components/TextField';

class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      phoneNumber: '',
      email: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    let name = event.target.name
    let value = event.target.value
    this.setState({[name]: value})
  }

  render() {
    return (
      <form className="callout" id="shipping-address-form">
        <h1>Shipping Address</h1>
        < TextField
          name='firstName'
          label='First Name'
          id='first-name'
          content={this.state.firstName}
          handleChange={this.handleChange} />

        < TextField
          name='lastName'
          label='Last Name'
          id='last-name' 
          content={this.state.lastName} 
          handleChange={this.handleChange} />

        < TextField
          name='address'
          label='Address'
          id='address' 
          content={this.state.address} 
          handleChange={this.handleChange} />

        < TextField
          name='city'
          label='City'
          id='city' 
          content={this.state.city} 
          handleChange={this.handleChange} />

        < TextField
          name='state'
          label='State'
          id='state' 
          content={this.state.state} 
          handleChange={this.handleChange} />

        < TextField
          name='zipCode'
          label='Zip Code'
          id='zip-code'
          content={this.state.zipCode} 
          handleChange={this.handleChange} />

        < TextField
          name='phoneNumber'
          label='Phone Number'
          id='phone-number'
          content={this.state.phoneNumber} 
          handleChange={this.handleChange} />

        < TextField
          name='email'
          label='Email'
          id='email'
          content={this.state.email} 
          handleChange={this.handleChange} />

        <input type="submit" className="button" value="Submit "/>
      </form>
    )
  }
}

export default FormContainer
