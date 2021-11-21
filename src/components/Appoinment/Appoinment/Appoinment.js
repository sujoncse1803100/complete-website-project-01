import React, { useState } from 'react';
import Footer from '../../Home/Footer/Footer';
import NavBar from '../../Home/Navbar/Navbar';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';
import BookAppoinment from '../BookAppoinment/BookAppoinment';

const Appoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
        setSelectedDate(date);
    }

    const color = {
        color: 'text-dark'
    }

    return (
        <div className="">
            <NavBar color={color} />
            <AppoinmentHeader handleDateChange={handleDateChange} />
            <BookAppoinment date={selectedDate} />
            <Footer />
        </div>
    );
};

export default Appoinment;