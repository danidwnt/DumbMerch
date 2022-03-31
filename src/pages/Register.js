import React from 'react'
import { Container } from 'react-bootstrap'
import ContentIndex from '../components/ContentIndex'
import FormRegister from '../components/FormRegister'


const Register = () => {
  return (
    <div>
      <Container className='flex py-5'>
                <div className='layout-side'>
                <div>
                    <ContentIndex/>
                </div>

                <div>
                    <FormRegister />
                </div>
                </div>
            </Container>
    </div>
  )
}

export default Register
