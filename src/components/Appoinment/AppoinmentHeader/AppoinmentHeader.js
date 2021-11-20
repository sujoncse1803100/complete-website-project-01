import React from 'react';
import Chair from '../../../images/Chair.png';
import Calendar from 'react-calendar';

const AppoinmentHeader = ({ handleDateChange }) => {

    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1>Appoinment</h1>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />

            </div>
            <div className="col-md-6">
                <img src={Chair} className="img-fluid" alt="" />
            </div>

        </main>
    );
};

export default AppoinmentHeader;