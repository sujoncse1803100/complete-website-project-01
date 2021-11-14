import React from 'react';

const ServiseDetail = ({ service }) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{ height: '80px', marginBottom: '30px' }} src={service.img} alt="" />
            <h5>{service.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, eligendi.</p>

        </div>
    );
};

export default ServiseDetail;