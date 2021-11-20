import React, { useState } from 'react';
import '../../../App.css';
import AppoinmentForm from '../AppoinmentForm/AppoinmentForm';

const BookingCard = ({ date, booking }) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{booking.subject}</h5>
                    <h6>{booking.visutingHout}</h6>
                    <p>{booking.totalSpace} SPACE AVAILABLE</p>
                    <button onClick={openModal} className="btn btn-brand text-uppercase">Book Appoinment</button>
                    <AppoinmentForm appoinmentOn={booking.subject} date={date} modalIsOpen={modalIsOpen} closeModal={closeModal} />
                </div>
            </div>

        </div>
    );
};

export default BookingCard;