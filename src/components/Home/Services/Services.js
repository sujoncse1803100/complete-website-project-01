import React from 'react';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import ServiseDetail from '../ServiceDetail/ServiseDetail';

const servicesData = [
    {
        id: 1,
        name: 'Fluoride Treatment',
        img: fluoride,
        description: '',
    },
    {
        id: 2,
        name: 'Cavity Filling',
        img: cavity,
        description: '',
    },
    {
        id: 3,
        name: 'Teeth Whitening',
        img: whitening,
        description: '',
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center mb-5">
                <h5 style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center ">
                <div className="w-75 row mt-5 ">
                    {
                        servicesData.map(service => <ServiseDetail key={service.id} service={service} />)
                    }
                </div>
            </div>

        </section>
    );
};

export default Services;