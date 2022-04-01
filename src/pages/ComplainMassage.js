import React from 'react'
import NavbarAdmin from '../components/NavbarAdmin'
import { Row, Col } from 'react-bootstrap'

const ComplainMassage = () => {
  return (
    <div >
      <NavbarAdmin />
      <Row style={{ height: '80vh' }}>
        <Col className='text-white flex ' style={{ borderRight: '1px solid white' }} sm={4}>
          <div className='layout-side'>
            <div className='complain-left' >
              <img src="assets/Ellipse1.png" alt="" />
              <h6>Admin</h6>
              <p>Yes, Is there anything I can help</p>
            </div>
          </div>
        </Col>
        <Col className='text-white flex ' sm={8}>
          <div>
            <div className="side-right-complain">
              <input style={{ marginTop: '100px' }} type="text" placeholder='Send Message' />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ComplainMassage
