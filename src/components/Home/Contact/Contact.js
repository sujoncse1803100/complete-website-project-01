import React from 'react';
import { Form } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <section className="contact-section text-center mb-5">
            <div className="container w-75 mt-5 pt-5">
                <h5 style={{ color: '#1CC7C1' }}>CONTACT US</h5>
                <h2 className="text-white">Always Contact With Us</h2>
                <Form className="p-3">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" placeholder="Email Address" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Subject" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control placeholder="Your nessage" as="textarea" rows={5} />
                    </Form.Group>
                    <button style={{ width: '200px' }} className="btn btn-primary mb-5" variant="primary" type="submit">
                        Submit
                    </button>
                </Form>
            </div>
        </section>
    );
};

export default Contact;