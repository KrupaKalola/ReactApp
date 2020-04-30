import React, { Component } from 'react'
import {
    CardBody,
    Row,
    Col
} from 'reactstrap';

const CustomCardBody =(props)=>{
    return(
        <Row className='justufy-content-between'>
                {props.displaySearch.map((person, i) =>

                    < Col lg='3' key={person.id} >
                        <div className='employee-detail text-center '>

                            <CardBody className='text-center'>
                                {person.url ? <img src={process.env.PUBLIC_URL + person.url} alt={person.name} className='rounded-circle img-fluid'></img> : <p className='initials rounded-circle'><b>{person.initial}</b></p>}
                                <p className='my-1'>{person.name}</p>
                                <p className='mb-0' style={{ fontSize: 14 }}>{person.jobTitle}</p>
                            </CardBody>

                        </div>
                    </Col >
                )}
            </Row>
    );
}
export default CustomCardBody;