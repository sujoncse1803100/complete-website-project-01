import React from 'react';

const AppoinmentByDate = ({ appointments }) => {
    return (
        <div>
            <h3>AppoinmentByDate : {appointments.length}</h3>
            {
                appointments.map((appointment) => <li>{appointment.name}</li>)
            }
        </div>
    );
};

export default AppoinmentByDate;