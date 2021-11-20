import React from 'react';
import AppoinmentSortList from '../AppoinmentSortList/AppoinmentSortList';

const AppoinmentByDate = ({ appointments }) => {
    console.log(appointments);

    return (
        <div >
            {
                appointments.length ?
                    <AppoinmentSortList appointments={appointments} ></AppoinmentSortList>
                    :
                    <div>
                        <p className="text-center mt-5" >No apoinments Available</p>
                    </div>
            }
        </div>
    );
};

export default AppoinmentByDate;