import React, { useEffect, useState } from 'react';
import AppoinmentByDate from '../AppoinmentByDate/AppoinmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';

const Dashboard = () => {
    const containerStyle = {
        backgroundColor: '#F4FDFB',
        height: '100vh'
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
            <div style={containerStyle} className=" row ">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-4">
                    <h6 className="text-start  mb-4">Appoinment</h6>
                    <div className="text-center">
                        <Calendar
                            onChange={handleDateChange}
                            value={new Date()}
                            style={{ boder: 'none' }}
                        />
                    </div>
                </div>
                <div className="col-md-6 mt-3 pt-4">
                    <AppoinmentByDate appointments={appointments} />
                </div>
            </div>
        </section>
    );
};

export default Dashboard;