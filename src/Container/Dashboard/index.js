import React from 'react'
import {
    Row,
    Col,
    CardBody,
    Card,
    CardText,
    CardTitle,
    CardHeader
} from 'reactstrap';

import './Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faBriefcase, faBirthdayCake, faBed, faBaby } from '@fortawesome/free-solid-svg-icons';

const Dashboard = (props) => {

    return (
        <div>
            <div>
                <Row>
                    <Col lg='3' md='6' sm='12'>
                        <Card className='user-card card grow'>
                            <CardBody className='d-flex'>
                                <div className='card-icon bg-primary'>
                                    <FontAwesomeIcon icon={faUsers} size='2x' color='#fff' style={{ margin: 'auto' }}></FontAwesomeIcon>
                                </div>
                                <div className='card-right'>
                                    <CardTitle><h6>Employees</h6></CardTitle>
                                    <CardText><b>700</b></CardText>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg='3' md='6' sm='12'>
                        <Card className='user-card card grow'>
                            <CardBody className='d-flex'>
                                <div className='card-icon bg-warning'>
                                    <FontAwesomeIcon icon={faUsers} size='2x' color='#fff' style={{ margin: 'auto' }}></FontAwesomeIcon>
                                </div>
                                <div className='card-right'>
                                    <CardTitle><h6>Employees</h6></CardTitle>
                                    <CardText><b>700</b></CardText>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg='3' md='6' sm='12'>
                        <Card className='user-card card grow'>
                            <CardBody className='d-flex'>
                                <div className='card-icon bg-danger'>
                                    <FontAwesomeIcon icon={faUsers} size='2x' color='#fff' style={{ margin: 'auto' }}></FontAwesomeIcon>
                                </div>
                                <div className='card-right'>
                                    <CardTitle><h6>Employees</h6></CardTitle>
                                    <CardText><b>700</b></CardText>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg='3' md='6' sm='12'>
                        <Card className='user-card card grow'>
                            <CardBody className='d-flex'>
                                <div className='card-icon bg-success'>
                                    <FontAwesomeIcon icon={faUsers} size='2x' color='#fff' style={{ margin: 'auto' }}></FontAwesomeIcon>
                                </div>
                                <div className='card-right'>
                                    <CardTitle><h6>Employees</h6></CardTitle>
                                    <CardText><b>700</b></CardText>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div>
                <Row>
                    <Col lg='6' md='6' sm='12'>
                        <Card className='today-wrapper card grow'>
                            <CardHeader className='card-header'>
                                <CardTitle className='today-title'><h4 className='mb-0'>Today</h4></CardTitle>
                            </CardHeader>
                            <CardBody className='card-body'>
                                <div>
                                    <div className='d-flex' style={{ alignItems: 'center' }}>
                                        <FontAwesomeIcon icon={faBirthdayCake} className='text-primary' style={{ width: 20 }}></FontAwesomeIcon>
                                        <p style={{ marginBottom: 0, paddingLeft: 20 }}>No Birthday Today</p>
                                    </div>
                                    <hr />
                                    <div className='d-flex' style={{ alignItems: 'center' }}>
                                        <FontAwesomeIcon icon={faBed} className='text-warning' style={{ width: 20 }}></FontAwesomeIcon>
                                        <p style={{ marginBottom: 0, paddingLeft: 20 }}>Ralph Baker is on sick leave today</p>
                                    </div>
                                    <hr />
                                    <div className='d-flex' style={{ alignItems: 'center' }}>
                                        <FontAwesomeIcon icon={faBaby} className='text-danger' style={{ width: 20 }}></FontAwesomeIcon>
                                        <p style={{ marginBottom: 0, paddingLeft: 20 }}>Danny Ward is on parenting leave today</p>
                                    </div>
                                    <hr />
                                    <div className='d-flex' style={{ alignItems: 'center' }}>
                                        <FontAwesomeIcon icon={faHome} className='text-info' style={{ width: 20 }}></FontAwesomeIcon>
                                        <p style={{ marginBottom: 0, paddingLeft: 20 }}>You are working from home today</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg='6' md='6' sm='12'>
                        <Card className='team-lead-wrapper card grow'>
                            <CardHeader className='card-header'>
                                <CardTitle className='card-title'><h4 className='mb-0'>Team Lead</h4></CardTitle>
                            </CardHeader>
                            <CardBody className='card-body'>
                                <div>
                                    <div className='d-flex' style={{ alignItems: 'center' }}>
                                        <div>
                                            <img src={process.env.PUBLIC_URL + '/user-avatar.jpg'} alt='user' className='team-lead-img rounded-circle img-fluid'></img>
                                        </div>
                                        <div className='pl-2'>
                                            <p style={{ marginBottom: 0 }}>Krupa Kalola</p>
                                            <p style={{ marginBottom: 0, fontSize: '15px', opacity: 0.6 }}>Design</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='d-flex' style={{ alignItems: 'center' }}>
                                        <div>
                                            <img src={process.env.PUBLIC_URL + '/user-avatar.jpg'} alt='user' className='team-lead-img rounded-circle img-fluid'></img>
                                        </div>
                                        <div className='pl-2'>
                                            <p style={{ marginBottom: 0 }}>Krupa Kalola</p>
                                            <p style={{ marginBottom: 0, fontSize: '15px', opacity: 0.6 }}>Design</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='d-flex' style={{ alignItems: 'center' }}>
                                        <div>
                                            <img src={process.env.PUBLIC_URL + '/user-avatar.jpg'} alt='user' className='team-lead-img rounded-circle img-fluid'></img>
                                        </div>
                                        <div className='pl-2'>
                                            <p style={{ marginBottom: 0 }}>Krupa Kalola</p>
                                            <p style={{ marginBottom: 0, fontSize: '15px', opacity: 0.6 }}>Design</p>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>

            <div>
                <Row>
                    <Col lg='6' md='6' sm='12'>
                        <Card className='recent-activiy-wrapper card grow'>
                            <CardHeader className='card-header'>
                                <CardTitle className='card-title'><h4 className='mb-0'>Recent Activities</h4></CardTitle>
                            </CardHeader>
                            <CardBody className='card-body'>
                                <div>
                                    <div className='d-flex' style={{ alignItems: 'center' }}>
                                        <div>
                                            <img src={process.env.PUBLIC_URL + '/user-avatar.jpg'} alt='user' className='team-lead-img rounded-circle img-fluid'></img>
                                        </div>
                                        <div className='pl-3'>
                                            <p style={{ marginBottom: 0 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                            <p style={{ marginBottom: 0, fontSize: '15px', opacity: 0.6 }}>Danny Ward | 1 hour ago</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='d-flex' style={{ alignItems: 'center' }}>
                                        <div>
                                            <img src={process.env.PUBLIC_URL + '/user-avatar.jpg'} alt='user' className='team-lead-img rounded-circle img-fluid'></img>
                                        </div>
                                        <div className='pl-3'>
                                            <p style={{ marginBottom: 0 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                            <p style={{ marginBottom: 0, fontSize: '15px', opacity: 0.6 }}>John Gibbs | 2 hour ago</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='d-flex' style={{ alignItems: 'center' }}>
                                        <div>
                                            <img src={process.env.PUBLIC_URL + '/user-avatar.jpg'} alt='user' className='team-lead-img rounded-circle img-fluid'></img>
                                        </div>
                                        <div className='pl-3'>
                                            <p style={{ marginBottom: 0 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                            <p style={{ marginBottom: 0, fontSize: '15px', opacity: 0.6 }}>Maria | 3 hours ago</p>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg='6' md='6' sm='12'>
                        <Card className='upcoming-leaves-wrapper card grow'>
                            <CardHeader className='card-header'>
                                <CardTitle className='card-title'><h4 className='mb-0'>Upcoming Leaves</h4></CardTitle>
                            </CardHeader>
                            <CardBody className='card-body'>
                                <div>
                                    <div className='d-flex' style={{ alignItems: 'center' }}>
                                        <FontAwesomeIcon icon={faBriefcase} className='text-primary'></FontAwesomeIcon>
                                        <p className='pl-3' style={{ marginBottom: 0 }}>Thu, 16 Apr 2020 </p>
                                    </div>
                                    <hr />
                                    <div className='d-flex' style={{ alignItems: 'center' }}>
                                        <FontAwesomeIcon icon={faBriefcase} className='text-warning'></FontAwesomeIcon>
                                        <p className='pl-3' style={{ marginBottom: 0 }}>Fri, 17 Apr 2020</p>
                                    </div>
                                    <hr />
                                    <div className='d-flex' style={{ alignItems: 'center' }}>
                                        <FontAwesomeIcon icon={faBriefcase} className='text-danger'></FontAwesomeIcon>
                                        <p className='pl-3' style={{ marginBottom: 0 }}>Mon, 20 Apr 2020</p>
                                    </div>
                                    <hr />
                                    <div className='d-flex' style={{ alignItems: 'center' }}>
                                        <FontAwesomeIcon icon={faBriefcase} className='text-info'></FontAwesomeIcon>
                                        <p className='pl-3' style={{ marginBottom: 0 }}>Fri, 24 Apr 2020</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </div>
        </div>

    );
}

export default Dashboard;
