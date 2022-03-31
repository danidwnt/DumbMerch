import React from 'react'
import { Container } from 'react-bootstrap'
import ContentIndex from '../components/ContentIndex'
import FormLogin from '../components/FormLogin'

const Login = () => {
    return (
        <div>
            <Container className='flex py-5'>
                <div className='layout-side'>
                <div>
                    <ContentIndex/>
                </div>

                <div >
                    <FormLogin/>
                </div>
                </div>
            </Container>
        </div>
    )
}

export default Login
