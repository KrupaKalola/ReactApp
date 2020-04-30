import React, { Component } from 'react'
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <header className='header'>
                <div className='top-header-section'>
                    <Container fluid={true}>
                        <Row className='align-item-center' style={{ lineHeight: '58px' }}>
                            <Col lg='3' md='3' sm='3' xs='6'>
                                <div className='logo'>
                                    <a href='Dashboard.js'>
                                        <img src={process.env.PUBLIC_URL + '/nividata_white-1.png'} alt='company-logo' style={{ width: '165px' }} />
                                    </a>
                                </div>
                            </Col>
                            <Col lg='9' md='9' sm='9' xs='6'>
                                <div className='user-block'>
                                    <Row>
                                        <Col lg='12' md='12' sm='12'>
                                            <div className='user-avatar'>
                                                <img src={process.env.PUBLIC_URL + '/user-avatar.jpg'} alt='user-avatar' className='rounded-circle img-fluid' />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </header>
        )
    }
}
