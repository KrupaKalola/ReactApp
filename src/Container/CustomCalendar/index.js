import React, { Component } from 'react'
import { Card, CardBody } from 'reactstrap'
import MyCalendar from './MyCalendar'

export default class CustomCalendar extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <MyCalendar></MyCalendar>
                    </CardBody>
                </Card>
            </div>
        )
    }
}


