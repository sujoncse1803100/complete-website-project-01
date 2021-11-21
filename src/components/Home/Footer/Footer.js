
import React from 'react';
import './Footer.css';
import FooterData from './FooterData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


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

                    <div className="col-md-3 col-sm-6 p-4 pt-5">
                        <p>Emmergency Dental Care</p>
                        <p>Check Up</p>
                        <p>Treatment of Personal Deases</p>
                        <p>Tooth Extraction</p>

                    </div>
                    {
                        footertData.map(footer => <FooterData key={footer.id} data={footer} />)
                    }
                    <div className="col-md-3 col-sm-6 p-3">
                        <h5 style={{ color: '#1CC7C1' }}>Our Address</h5>
                        <p>New Yorks-101010 Hudhon Yards</p>
                        <div className="d-flex mb-3">
                            <a className="me-3" href="https://web.facebook.com/sujonali8276/" target="_blank"><FontAwesomeIcon style={{ height: '50px', width: '50px', color: 'blue' }} icon={faFacebook} /></a>
                            <a className="me-3" href="https://web.facebook.com/sujonali8276/" target="_blank"><FontAwesomeIcon style={{ height: '50px', width: '50px', color: 'red' }} icon={faYoutube} /></a>
                            <a className="me-3" href="https://web.facebook.com/sujonali8276/" target="_blank"><FontAwesomeIcon style={{ height: '50px', width: '50px', color: 'green' }} icon={faLinkedin} /></a>
                        </div>
                        <p>Call now</p>
                        <button className="btn btn-success rouned-pill">
                            <FontAwesomeIcon style={{ height: '20px', marginRight: '5px', color: 'white' }} icon={faPhone} />
                            +8801782562576
                        </button>
                    </div>
                </div>
                <b><p className="text-center">Copyright 2021-All Rights Reserved</p></b>
            </div>
        </section>
    );
};

export default Footer;