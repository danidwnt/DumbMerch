import React from 'react'
import {Container, Button, Row, Col, Form} from 'react-bootstrap'
import NavbarUser from '../components/NavbarUser'



function CheckOut() {
  return (
    <div>
    <NavbarUser/>
        <Container className='checkout'>
            <div className='mt-5 py-5 px-4 rounded-2 shadow-sm address-checkout'>
                <span>
                    <span><img style={{width: '30px', height:'30px'}} src="assets/map.svg" alt="img" /></span>
                    <span className='ms-1'>Address</span>
                </span>
                <span className='d-block'>Dani Dewantara (+62) 895637032348 Jl. Ki anwar mangku . Lrg sriraya 2, KOTA PALEMBANG - PLAJU, SUMATERA SELATAN, ID 30266
                <Button className='ms-5' variant='success'>Change</Button>
                </span>
            </div>
            <div className='mt-4 py-5 px-4 rounded-2 total-payment'>
            <Row>
                <Col><p>Product in progress</p></Col>
                <Col><p>Unit price</p></Col>
                <Col><p>Total unit</p></Col>
                <Col><p>Total price</p></Col>
            </Row>
            <hr />
            <Row>
                <Col><img style={{width: '40px', height: '40px'}} src="assets/Rectangle4.png" alt="img" /><span className='ms-3'>Mouse</span></Col>
                <Col><span>Rp16.999</span></Col>
                <Col><span>1</span></Col>
                <Col><span>Rp16.999</span></Col>
            </Row>
            </div>
            <div className='mb-5'>
                <h3 className='mt-3 mb-4 green'>Choose Pay :</h3>
                <div>
                    <Form.Select className='input-payment' aria-label="Default select example">
                        <option>select payment</option>
                        <option value="1">BNI</option>
                        <option value="2">BCA</option>
                        <option value="3">MANDIRI</option>
                    </Form.Select>
                </div>
            </div>
            <div className='mb-5 p-3'>
                <Row>
                    <Button className='p-2' variant='danger'>Check Out</Button>
                </Row> 
            </div>
        </Container>
    </div>
  )
}

export default CheckOut