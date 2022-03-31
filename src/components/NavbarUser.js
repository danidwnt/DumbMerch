import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavbarUser = () => {
    return (
        <div>

            <Navbar className="justify-content-end py-4 mb-2" style={{
                background: '#0B0B0B', height: '100px '
            }}>
                
                <Nav className="justify-content-end container py-4" >

                    <Link to="/user-shop">
                        <img className='side-left-nav' src="assets/Frame.png" alt="" />
                    </Link>

                    <Nav.Item >

                        <Nav.Link>
                            <Link to="/complain"
                                style={{
                                    color: 'white',
                                    fontWeight: '600',
                                    fontSize: '18px',
                                    marginTop: '20px',
                                    textDecoration: 'none',
                                }}>
                                Complain
                            </Link>
                        </Nav.Link>


                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link >
                            <Link to='/profile'
                                style={{
                                    color: 'white',
                                    fontWeight: '600',
                                    fontSize: '18px',
                                    marginLeft: '15px',
                                    marginTop: '20px',
                                    textDecoration: 'none'
                                }}>
                                Profile
                            </Link></Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link >
                            <Link to='/'
                                style={{
                                    color: 'white',
                                    fontWeight: '600',
                                    fontSize: '18px',
                                    marginLeft: '15px',
                                    marginTop: '20px',
                                    textDecoration: 'none'
                                }}>
                                Logout
                            </Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavbarUser
