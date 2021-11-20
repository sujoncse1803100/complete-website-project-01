import React from 'react';
import { Link } from 'react-router-dom';
import Chair from '../../../images/Chair.png';

const HeaderMain = () => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1>Your New Smile Starts Here</h1>
                <p className="text-secondary">Wlecome to our websiteTempor est accusam diam nonumy clita dolor amet sed. Vero eirmod duo aliquyam ipsum ut sadipscing eos, magna nonumy est..</p>
                <Link to="/appoinment">
                    <button className="btn btn-primary">Get Appointment</button>
                </Link>
            </div>
            <div className="col-md-6">
                <img src={Chair} className="img-fluid" alt="" />
            </div>

        </main>
    );
};

export default HeaderMain;