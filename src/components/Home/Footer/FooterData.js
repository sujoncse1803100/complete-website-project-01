import React from 'react';

const FooterData = ({ data }) => {
    return (
        <div className="col-md-3 p-3">
            <h5 style={{ color: '#1CC7C1' }}>{data.name}</h5>
            <p>Emmergency Dental Care</p>
            <p>Check Up</p>
            <p>Treatment of Personal Deases</p>
            <p>Tooth Extraction</p>
            <p>Check Up</p>
            <p>Check Up</p>
        </div>
    );
};

export default FooterData;