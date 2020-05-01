import React, { Component } from 'react'
import {
    Container,
    Row,
    Col,
    CardBody,
    Card,
    CardText,
} from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faBuilding, faCalendarAlt, faBriefcase, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import Employee from '../Employee';
import Dashboard from '../Dashboard';
import CustomCalendar from '../CustomCalendar'
import './Nav.css'


export default class Nav extends Component {
    handleLogout() {
        return this.props.submitForm
    }
    render() {
        return (
            <Router>
                <div>
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
                                                    <div className='user-avatar' onClick={this.handleLogout(this.props.submitForm)}>
                                                    <FontAwesomeIcon className='logout'  icon={faSignOutAlt} size='2x'></FontAwesomeIcon>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </header>
                    {/* ------------Content-------------- */}
                    <div className='page-wrapper'>
                        <Container fluid={true}>
                            <Row>
                                <Col xl='3' lg='4' md='12' style={{ position: 'relative', overflow: 'visible', boxSizing: 'borderBox', minHeight: 1 }}>
                                    <div style={{ position: 'sticky', top: '0px' }}>
                                        <div>
                                            <Card className='user-card card grow'>
                                                <CardBody>
                                                    <CardText>
                                                        Home / <span style={{ opacity: 0.7 }}>Dashboard</span>
                                                        <br />
                                                        <span style={{ fontSize: 20 }}>Admin Dashboard</span>
                                                    </CardText>
                                                </CardBody>
                                            </Card>
                                        </div>

                                        <div>
                                            <Card className='user-card card grow text-center'>
                                                <CardBody className='user-info'>
                                                    <div className='mb-4'>
                                                        <img src={process.env.PUBLIC_URL + '/user-avatar.jpg'} alt='user-avatar' className='rounded-circle img-fluid' width='100' />
                                                    </div>
                                                    <div className='user-detail'>
                                                        <h4>
                                                            <b>Welcome {localStorage.getItem('username')}</b>
                                                        </h4>
                                                        <p>Frontend Devloper</p>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </div>
                                        <div>
                                            <Card className='sidebar-wrapper card grow'>
                                                <CardBody >
                                                    <Row className='sidebar-info'>
                                                        <Col lg='6' md='6' sm='12' className='border-right border-bottom p-3'>
                                                            <Link to="/dashboard">

                                                                <div style={{ verticalAlign: 'middle' }}>
                                                                    <FontAwesomeIcon icon={faHome} size='2x'></FontAwesomeIcon>
                                                                    <p>Dashboard</p>
                                                                </div>
                                                            </Link>
                                                        </Col>
                                                        <Col lg='6' md='6' sm='12' className='border-bottom p-3'>
                                                            <Link to="/employee">
                                                                <div style={{ verticalAlign: 'middle' }} >
                                                                    <FontAwesomeIcon icon={faUsers} size='2x'></FontAwesomeIcon>
                                                                    <p>Employees</p>
                                                                </div>
                                                            </Link>
                                                        </Col>
                                                        <Col lg='6' md='6' sm='12' className='border-right border-bottom p-3'>
                                                            <div style={{ verticalAlign: 'middle' }}>
                                                                <FontAwesomeIcon icon={faBuilding} size='2x'></FontAwesomeIcon>
                                                                <p>Company</p>
                                                            </div>
                                                        </Col>
                                                        <Col lg='6' md='6' sm='12' className='border-bottom p-3'>
                                                            <Link to="/calendar">
                                                                <div>
                                                                    <FontAwesomeIcon icon={faCalendarAlt} size='2x'></FontAwesomeIcon>
                                                                    <p>Calendar</p>
                                                                </div>
                                                            </Link>
                                                        </Col>
                                                        <Col lg='6' md='6' sm='12' className='border-right p-3'>
                                                            <div>
                                                                <FontAwesomeIcon icon={faBriefcase} size='2x'></FontAwesomeIcon>
                                                                <p>Leave</p>
                                                            </div>
                                                        </Col>
                                                        <Col lg='6' md='6' sm='12' className='p-3'>
                                                            <div>
                                                                <FontAwesomeIcon icon={faUser} size='2x'></FontAwesomeIcon>
                                                                <p>Profile</p>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </CardBody>
                                            </Card>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <Switch>
                                        <Route path="/employee">
                                            <Employee />
                                        </Route>
                                        <Route path="/dashboard">
                                            <Dashboard />
                                        </Route>
                                        <Route path="/calendar">
                                            <CustomCalendar />
                                        </Route>
                                        <Route path="/">
                                            <Dashboard />
                                        </Route>
                                    </Switch>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Router>
        )
    }
}
