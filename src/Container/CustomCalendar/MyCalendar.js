import React, { useState } from 'react'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import events from './events'
import * as dates from '../../../node_modules/react-big-calendar/lib/utils/dates'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

let allViews = Object.keys(Views).map(k => Views[k])

const localizer = momentLocalizer(moment)

const ColoredDateCellWrapper = ({ children }) => {
  debugger
  console.log(children)
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  })
}


let MyCalendar = () => {
  const [event, setevent] = useState(events)
  const [modalCreate, setModalCreate] = useState(false);
  const [name, setName] = useState('');
  const [startEvent, setStart] = useState('');
  const [endEvent, setEnd] = useState('');
  const [modalShow, setModalShow] = useState(false);

  const toggleCreate = () => {
    return (
      setModalCreate(!modalCreate)
    )
  }

  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value)
      console.log('name: ', name);
    }
    else if (e.target.name === 'start') {
      setStart(e.target.value)
      console.log('start: ', e.target.value);
    }
    else {
      setEnd(e.target.value)
      console.log('end: ', endEvent);

    }
  }

  const handleSelect = ({ start, end }) => {
    debugger
    setStart(start)
    setEnd(end)
    toggleCreate()
  }

  const createEvent = () => {
    debugger
    const start = startEvent;
    const end = endEvent;
    const title = name
    if (name)
      setevent([
        ...event,
        {
          start,
          end,
          title
        }
      ],
      )
    toggleCreate()
  }

  const toggleShow = () => {
    return (
      setModalShow(!modalShow)
    )
  }

  const showEventDetail=(e)=>{
    setName(e.title)
    toggleShow()
  }

  return (
    <div>
      <Calendar
        events={event}
        views={allViews}
        step={60}
        showMultiDayTimes
        max={dates.add(dates.endOf(new Date(2020, 3, 1), 'day'), -1, 'hours')}
        defaultDate={new Date(2020, 3, 1)}
        components={{
          timeSlotWrapper: ColoredDateCellWrapper,
        }}
        localizer={localizer}
        style={{ height: 500 }}

        selectable={true}
        onSelectEvent={showEventDetail}
        onSelectSlot={handleSelect}
      />
      {/* ------------------------Create Event Modal------------------------------ */}
      <Modal isOpen={modalCreate} toggle={toggleCreate} className="a" centered style={{maxWidth:'50%'}}>
        <ModalHeader toggle={toggleCreate}>Modal title</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="eventName">Event Name</Label>
              <Input type="text" name="name" id="eventName" onChange={handleChange} />
            </FormGroup>
            {/* <FormGroup>
              <Label for="eventStart">Start</Label>
              <Input type="date" name="start" id="eventStart" onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
              <Label for="eventEnd">End</Label>
              <Input type="date" name="end" id="eventEnd" onChange={handleChange}/>
            </FormGroup> */}
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={createEvent}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggleCreate}>Cancel</Button>
        </ModalFooter>
      </Modal>


      {/* ----------------------------Show Event Detail -------------------- */}
      <Modal isOpen={modalShow} toggle={toggleShow} className="a" centered style={{maxWidth:'50%'}}>
        <ModalHeader toggle={toggleShow}>Modal title</ModalHeader>
        <ModalBody>
          <h4>You are invited at {name}</h4>
            {/* <FormGroup>
              <Label for="eventStart">Start</Label>
              <Input type="date" name="start" id="eventStart" onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
              <Label for="eventEnd">End</Label>
              <Input type="date" name="end" id="eventEnd" onChange={handleChange}/>
            </FormGroup> */}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleShow}>Ok</Button>{' '}
        </ModalFooter>
      </Modal>


    </div>
  )
}



export default MyCalendar;