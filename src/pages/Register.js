import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import ContentIndex from '../components/ContentIndex'
import { Form, Button, Row } from 'react-bootstrap'
import Product from './Product'




export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: false,
      user: {
        fullname: "",
        email: "",
        password: ""
      },
    }
  }

  componentDidMount() {
    console.log('app component did mount');
  }

  componentDidUpdate() {
    console.log('app component did update');
    console.log(this.state)
  }

  handelOnChange = (e) => {
    const state = this.state
    this.setState({
      ...state,
      [e.target.name]: e.target.value
    })
    // console.log(state);
  }

  handelOnSubmit = (e) => {
    (e).preventDefault();
    const fullname = document.getElementsByName('fullname').value
    const email = document.getElementsByName('email').value
    const password = document.getElementsByName('password').value
    this.setState({
      isLogin: true,
      user: {
        fullname,
        email,
        password
      }
    })
    console.log(this.state);
  }

  render() {
    return (
      <div>
        {this.state.isLogin ? (
          <Product />) : (
          <Container className='flex py-5'>
            <div className='layout-side'>
              <div>
                <ContentIndex />
              </div>

              <div>
                <div className='border-form-register'>
                  <h1 className='mb-5'>Register</h1>
                  <Form onSubmit={this.handelOnSubmit}>
                    <Form.Control 
                            onChange={this.handelOnChange}
                            value ={this.state.fullname}
                            name="fullname"
                            type="text" 
                            placeholder='Name' 
                            className="mb-4 text-white bg-dark p-2 " />

                    <Form.Control 
                            onChange={this.handelOnChange}
                            value ={this.state.email}
                            name='email'
                            type="email" 
                            placeholder='Email' 
                            className="mb-4 text-white bg-dark p-2 " />

                    <Form.Control onChange={this.handelOnChange}
                            value ={this.state.password}
                            name='password'
                            type="password" 
                            placeholder='Password'  
                            className="mb-5 text-white bg-dark p-2" />

                    <Row className='px-2'>
                      <Button className='p-2' variant="danger" type="submit">Login</Button>
                    </Row>
                  </Form>
                </div>
              </div>
            </div>
          </Container>
        )}
      </div>
    )
  }
}

