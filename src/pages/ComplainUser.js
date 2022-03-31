import React from 'react'
import NavbarUser from '../components/NavbarUser'
import { Row, Col } from 'react-bootstrap'
const ComplainUser = () => {
    return (
        <div>
            <NavbarUser />

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
                            <div className='layout-side'>
                                <div className='cht-admin'>
                                    <img className='chat-1' src="assets/Ellipse1.png" alt="" />
                                    <p className='massage-admin'>Yes, Is there anyting I can help ?</p>
                                </div>
                                <div className='cht-user'>
                                    <p className='message-user'>Hello Admin, I Need Your Help</p>
                                </div>
                            </div>
                            <input type="text" placeholder='Send Message' />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ComplainUser
