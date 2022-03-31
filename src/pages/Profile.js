import React from 'react'
import NavbarUser from '../components/NavbarUser'
import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Profile = () => {
    return (
        <div>
            <NavbarUser />
            <Container className='flex py-5'>
                <div className='layout-side'>
                    <div>
                        <h3 className='header-content'>My Profile</h3>
                        <div className='layout-side'>
                            <div className='photo-profile'>
                                <img src="assets/Rectangle12.png" alt="" />
                            </div>

                            <div className='biodata'>
                                <h4>Name</h4>
                                <p>Yosep</p>

                                <h4>Email</h4>
                                <p>danideantara02@gmail.com</p>

                                <h4>Phone</h4>
                                <p>0896424242</p>

                                <h4>Gender</h4>
                                <p>Male</p>

                                <h4>Address</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                            </div>
                        </div>
                    </div>
                    <div className='profile-right'>
                        <h3>My Transaction</h3>
                        <div className='container-mytransaction'>
                            <div >
                                <img className='img-mytans1' src="assets/Rectangle4.png" alt="" />
                            </div>
                            <div className='detail-transcation'>
                                <h4>Mouse</h4>
                                <p>Saturday, 14 Juli 2021</p>
                                <p>Price : Rp.500.000</p>
                                <h5>Sub Total : 500.000</h5>

                            </div>
                            <div className='img-mytans2'>
                                <img src="assets/Frame.png" alt="" />

                                <Link style={{ textDecoration: 'none' }} to='/Feedback'>
                                    <Button className='btn-rating' variant='danger'> Nilai </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Profile
