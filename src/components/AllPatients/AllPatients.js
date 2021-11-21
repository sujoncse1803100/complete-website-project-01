import React, { useEffect, useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AllAppoinments = () => {
    const containerStyle = {
        backgroundColor: '#F4FDFB',
        height: '100vh'
    }

    const [patients, setPatients] = useState([]);


    useEffect(() => {
        fetch('https://stark-shore-06055.herokuapp.com/patients')
            .then(response => response.json())
            .then(result => {
                setPatients(result);
            })
    }, []);

    return (
        <section>
            <div style={containerStyle} className=" row ">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10 mt-3">
                    <h6>All Patients</h6>
                    <table className="table table-borderless">
                        <thead>
                            <th className="text-secondary" scope="col">Sl. No</th>
                            <th className="text-secondary" scope="col">Name</th>
                            <th className="text-secondary" scope="col">Gender</th>
                            <th className="text-secondary" scope="col">Age</th>
                            <th className="text-secondary" scope="col">Weight</th>
                            <th className="text-secondary" scope="col">Phone</th>
                            <th className="text-secondary" scope="col">Service</th>
                            <th className="text-secondary" scope="col">Email</th>
                        </thead>
                        <tbody>
                            {
                                patients.map((patient, index) =>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{patient.name}</td>
                                        <td>{patient.gender}</td>
                                        <td>{patient.age}</td>
                                        <td>{patient.weight}</td>
                                        <td>{patient.phone}</td>
                                        <td>{patient.service}</td>
                                        <td>{patient.email}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    );
};

export default AllAppoinments;