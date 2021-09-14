import React, { Component } from 'react';
import { Modal, Button, ModalBody } from 'react-bootstrap';
import '../styles/contactModal.css';
import { useHistory } from 'react-router';
import { Icons } from './icons';
import { useMutation, gql } from '@apollo/client';

const CREATE_CONTACT_MUTATION = gql`
        mutation PostMutation(
            $name: String!
            $email: String!
            $message: String!
        ) {
        post(name:$name,email:$email,message:$message) {
            id
            name
            email
            message
        }
    }
    `;

export const ContactModal = (props) => {

    const history = useHistory();
    const [formState, setFormState] = React.useState({
        name: '',
        email: '',
        message: ''
    });
    const [createContact] = useMutation(CREATE_CONTACT_MUTATION, {
        variables: {
            name: formState.name,
            email: formState.email,
            message: formState.message
        },
        onCompleted: () => alert("Message Added")
    });
    return (<Modal className="popup" dialogClassName="modal-90w"
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
        </Modal.Header>

        <ModalBody>
            <h2 className="pad-60">Contact</h2>
            <p className="pad-60 desc font-size-12">Lorem Ipsum is simply dummy text of the printing</p>
            <form onSubmit={(e) => {
                e.preventDefault();
                createContact();
            }}>
                <div className="container input-feild align-self-center">
                    <div className="row">
                        <p className="label">Name</p>
                        <input value={formState.name}
                            onChange={(e) =>
                                setFormState({
                                    ...formState,
                                    name: e.target.value
                                })
                            } type="text" className="field" placeholder="Enter your name here"></input>
                    </div>
                </div>
                <div className="container input-feild">
                    <div className="row">
                        <p className="label">E-mail</p>
                        <input value={formState.email}
                            onChange={(e) =>
                                setFormState({
                                    ...formState,
                                    email: e.target.value
                                })
                            } type="text" className="field" placeholder="Enter your e-mail address here"></input>
                    </div>
                </div>
                <div className="container input-feild">
                    <div className="row">
                        <p className="label">Message</p>
                        <input value={formState.message}
                            onChange={(e) =>
                                setFormState({
                                    ...formState,
                                    message: e.target.value
                                })
                            } type="text" className="field" placeholder="Wanna share something with us?"></input>
                    </div>
                </div>
                <Button variant="light" className="submit-button" type="submit" value="Submit">Submit</Button>
            </form>

        </ModalBody>
        <Modal.Footer>
            <div className="row" id="last-row">
                <p className="info font-size-12">Need more info? hello@newzera.com</p>
                <Icons className="icons" />
            </div>
        </Modal.Footer>

    </Modal>);
}
