import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingleData = [
    {
        _id: '5ejkxdj8hds76s9d7ncvbnf3fe',
        id: 1,
        subject: 'Teeth Orthodonties',
        visutingHout: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: '5ejkxdj8hds76s9d7ncvbnf3ff',
        id: 2,
        subject: 'Cosmetic Dentisty',
        visutingHout: '10:50 AM - 11:30 AM',
        totalSpace: 10
    },
    {
        _id: '5ejkxdj8hds76s9d7ncvbnf3fe1',
        id: 2,
        subject: 'Teeth Cleaning',
        visutingHout: '7:00 AM - 8:30 AM',
        totalSpace: 10
    },
    {
        _id: '5ejkxdj8hds76s9d7ncvbnf3fe',
        id: 4,
        subject: 'Cavity Protection',
        visutingHout: ' 9:00 AM - 9:30 AM',
        totalSpace: 10
    },
    {
        _id: '5ejkxdj8hds76s9d7ncvbnf3fe2',
        id: 5,
        subject: 'Teeth Replace',
        visutingHout: '11:59 AM - 5:00 PM',
        totalSpace: 10
    },
    {
        _id: '5ejkxdj8hds76s9d7ncvbnf3fe4',
        id: 6,
        subject: 'Teeth Replace',
        visutingHout: '11:59 AM - 5:00 PM',
        totalSpace: 10
    },
];

const BookAppoinment = ({ date }) => {
    return (
        <section>
            <h2 className="text-center text-success mb-5">Available Appointment on {date.toDateString()}</h2>
            <div className="row container">
                {
                    bookingleData.map(booking => <BookingCard key={booking._id} date={date} booking={booking} />)
                }
            </div>
        </section>
    );
};

export default BookAppoinment;