import React from 'react';

const AppoinmentSortList = ({ appointments }) => {

    return (
        <div>
            <table className="table table-borderless">
                <thead>
                    <th className="text-secondary" scope="col">Sl</th>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Phone</th>
                    <th className="text-secondary" scope="col">Service</th>
                </thead>
                <tbody>
                    {
                        appointments.map((appoinment, index) =>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{appoinment.name}</td>
                                <td>{appoinment.phone}</td>
                                <td>{appoinment.service}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AppoinmentSortList;