import React from 'react'
import { Container, Form, Row, Button } from 'react-bootstrap'
import NavbarAdmin from '../components/NavbarAdmin'

const EditCategory = () => {
    return (
        <div >
            <NavbarAdmin />
            <Container className='mt-5'>

                    
                
                    <h3 className='header-content'> Edit Category </h3>
                    <Form.Control
                        
                        name="text" type="text"
                        placeholder='Categoty'
                        className="mb-4 text-white bg-dark p-2 mt-5" />
                    <Row className='px-2'>
                        <Button className='mt-2' variant="success"> Save </Button>
                    </Row>
                
            </Container >
        </div>
    )
}

export default EditCategory
