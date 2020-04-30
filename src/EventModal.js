import React from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Form, FormGroup, Label, Input} from 'reactstrap'
class EventModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: this.props.modalStatus,
            fade: false
        };
        this.toggle = this.toggle.bind(this);
    };
    toggle() {
        console.log("hello");
        this.setState({
            modal: !this.state.modal
        });
        console.log('after setState: ', this.state);
    }
    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} fade={this.state.fade} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>New</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="eventName">Name</Label>
                                <Input type="text" name="name" id="eventName" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="eventStart">Start</Label>
                                <Input type="date" name="start" id="eventStart" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="eventEnd">End</Label>
                                <Input type="date" name="end" id="eventEnd" />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.toggle}>Do Something</Button>{' '}
                        <Button onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
export default EventModal