import React from 'react';
import DoctorDetail from './DoctorDetail';
import doctor from '../../../images/doctor.png';

const doctors = [
    {
        id: '1',
        name: 'Dr. Muhammad',
        icon: doctor,
        phone: '+1573751273',
    },
    {
        id: '1',
        name: 'Dr. Haris',
        icon: doctor,
        phone: '+1573899457',
    },
    {
        id: '1',
        name: 'Dr. Junnurain',
        icon: doctor,
        phone: '+1573834127',
    },
]

const Doctor = () => {
    return (
        <section className="doctor-section mb-5">
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