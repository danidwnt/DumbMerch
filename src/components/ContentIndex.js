import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ContentIndex = () => {
    return (
        <div>
            <Container>
                <div className='contentIndex'>
                    <img src="assets/Frame.png" alt="" />
                    <h1>
                        Easy, Fast and Reliable
                    </h1>
                    <p>
                        Go shopping for merchandise, just go to dumb merch shopping. the biggest merchandise in Indonesia  
                    </p>

                    <div className="btn-group-index">
                        <Link to='/'>
                            <button className='btn-login'>Login</button>
                        </Link>
                        <Link 
                            to='/register' 
                            style={{ 
                                textDecoration: 'none' }}>
                            <p className='btn-register'>
                                Register
                            </p>
                        </Link>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default ContentIndex
