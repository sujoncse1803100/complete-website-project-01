import React from 'react';
import './Footer.css';
import FooterData from './FooterData';

const footertData = [
    {
        id: '1',
        name: 'Service',
    },
    {
        id: '2',
        name: 'Oral Health',
    },
]

const Footer = () => {
    return (
        <section className="footer-section">
            <div className="container">
                <div className="row d-flex">

                    <div className="col-md-3 p-4 pt-5">
                        <p>Emmergency Dental Care</p>
                        <p>Check Up</p>
                        <p>Treatment of Personal Deases</p>
                        <p>Tooth Extraction</p>

                    </div>
                    {
                        footertData.map(footer => <FooterData key={footer.id} data={footer} />)
                    }
                    <div className="col-md-3 p-3">
                        <h5 style={{ color: '#1CC7C1' }}>Our Address</h5>
                        <p>New Yorks-101010 Hudhon Yards</p>
                        <p>Call now..</p>
                        <button className="btn btn-primary">+15980235128</button>
                    </div>
                </div>
                <b><p className="text-center">Copyright 2021-All Rights Reserved</p></b>
            </div>
        </section>
    );
};

export default Footer;