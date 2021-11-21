import React from 'react';
import Chair from '../../../images/Chair.png';
import Calendar from 'react-calendar';

const AppoinmentHeader = ({ handleDateChange }) => {

    return (
        <main style={{ height: '600px' }} className="row d-flex justify-content-center">
            <div className="col-md-4 text-start offset-md-1">
                <h1>Appoinment</h1>
                <div className="">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>

            </div>
            <div className="col-md-6">
                <img src={Chair} className="img-fluid" alt="" />
            </div>

        </main>
    );
};

export default AppoinmentHeader;