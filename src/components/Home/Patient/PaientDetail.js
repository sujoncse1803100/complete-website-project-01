import React from 'react';

const PaientDetail = ({ patinet }) => {
    return (
        <div className="col-md-4 p-2">
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

export default PaientDetail;