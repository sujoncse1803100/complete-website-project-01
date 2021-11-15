import React from 'react';
import doctor from '../../../images/doctor.png'
import './Appoinment.css'

const Appoinment = () => {
    return (
        <section className="appoinment-section  mb-5">
            <div className="container mt-5">
                <div className="row ">
                    <div className="col-md-5 ">
                        <img style={{ width: '100%', height: '126%' }} src={doctor} className="fluid" alt="" />
                    </div>
                    <div className="col-md-7 p-5">
                        <h5 style={{ color: '#1CC7C1' }}>APPOINMENT</h5>
                        <h2 className=" text-white">Make An Appoinment Today</h2>
                        <p className="text-secondary text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptate optio quidem saepe fugit suscipit atque voluptatem alias at provident placeat, beatae vero fugiat illum error amet quae nesciunt? Vero fuga voluptatum repudiandae! Facilis soluta provident, ipsa repellat corporis, omnis fugit perferendis qui ut, nostrum iste totam optio unde dolorem?
                        </p>
                        <button className="btn btn-primary text-white" text-white>Learn More</button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Appoinment;