import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div>
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        <p><i>Copyright &copy; {currentYear} - All Rights Reserved By TechNest</i></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    </div>
  )
}

export default Footer