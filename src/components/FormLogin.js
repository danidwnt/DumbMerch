import React from 'react'
import { Form, Button, Row } from 'react-bootstrap'

const FormLogin = () => {
    return (
        <div>
            <div className='border-form-login'>
                <h1 className='mb-5'>Login</h1>
                <Form>
                    <Form.Control type="email" placeholder="Enter email" className="mb-4 text-white bg-dark " />
                    <Form.Control type="password" placeholder="Password" className="mb-5 text-white bg-dark" />
                    <Row className='px-2'>
                        <Button className='p-2' variant="danger" type="submit">Login</Button>
                    </Row>
                </Form>
            </div>
        </div>
    )
}

export default FormLogin
