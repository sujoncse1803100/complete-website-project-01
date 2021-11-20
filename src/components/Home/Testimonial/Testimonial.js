import React from 'react';
import ellipse1 from '../../../images/Ellipse 1.png'
import ellipse2 from '../../../images/Ellipse 2.png'
import ellipse3 from '../../../images/Ellipse 3.png'
import Testimonial from './TestimonialDetail';

const patinet = [
    {
        id: 1,
        name: 'Sujon Ali',
        comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor illum dicta animi ducimus. Debitis,    quisquam? Enim aperiam temporibus adipisci eius.',
        image: ellipse1
    },
    {
        id: 2,
        name: 'Nisan Ali',
        comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor illum dicta animi ducimus. Debitis, quisquam? Enim aperiam temporibus adipisci eius.',
        image: ellipse2
    },
    {
        id: 3,
        name: 'Mizan Ali',
        comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor illum dicta animi ducimus. Debitis, quisquam? Enim aperiam temporibus adipisci eius.',
        image: ellipse3
    },
]

const Patient = () => {
    return (
        <section className="patient-container  ">
            <div className="container">
                <h5 style={{ color: '#1CC7C1' }}>TESTIMONIAL</h5>
                <h2>What's Out Patient <br /> Says</h2>
                <div className="row pt-5 mb-5 d-flex justify-content-between">
                    {
                        patinet.map(p => <Testimonial key={p.id} patinet={p} />)
                    }
                </div>
            </div>

        </section>
    );
};

export default Patient;