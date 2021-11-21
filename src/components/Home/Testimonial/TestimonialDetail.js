import React from 'react';

const Testimonial = ({ patinet }) => {

    const styles = {
        boxSizing: 'boder-box',
        padding: '5px',
        boxShadow: '2px 5px 5px 1px  gray'
    }

    return (
        <div style={styles} className="col-md-3 col-sm-6 p-2">
            <p >{patinet.comment}</p>
            <div className="d-flex mt-5">
                <img src={patinet.image} alt="" />
                <div className="ms-3">
                    <h5>{patinet.name}</h5>
                    <p>Rajshahi</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;