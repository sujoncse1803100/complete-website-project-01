import React, { useEffect, useState } from 'react';
import DoctorDetail from './DoctorDetail';


const Doctor = () => {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://stark-shore-06055.herokuapp.com/doctors')
            .then((response) => response.json())
            .then(data => setDoctors(data));
    }, [doctors])


    return (
        <section className="doctor-section ">
            <div className="container text-center mt-5">
                <h5 style={{ color: '#1CC7C1' }}>Our Doctors</h5>
                <div className="row d-flex justify-content-between mt-5">
                    {
                        doctors.map(doctor => <DoctorDetail key={doctor.id} doctor={doctor} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctor;