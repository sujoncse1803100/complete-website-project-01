import React, { useEffect, useState } from 'react';
import AppoinmentByDate from '../AppoinmentByDate/AppoinmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';

const Dashboard = () => {
    const containerStyle = {
        backgroundColor: '#F4FDFB',
        height: '100%'
    }

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = date => {
        setSelectedDate(date);

    }


    useEffect(() => {

        fetch('http://localhost:3001/appoinmentByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate })
        })
            .then(response => response.json())
            .then(result => {
                setAppointments(result);
            })

    }, [selectedDate]);

    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-5">
                    <h1>Calender</h1>
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-5">
                    <AppoinmentByDate appointments={appointments} />
                </div>
            </div>
        </section>
    );
};

export default Dashboard;