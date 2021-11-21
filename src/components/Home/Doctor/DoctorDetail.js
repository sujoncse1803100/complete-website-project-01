import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const DoctorDetail = ({ doctor }) => {
    const styles = {
        boxSizing: 'boder-box',
        padding: '5px',
        boxShadow: '2px 5px 5px 1px  gray',
        borderRadius: '10px'
    }
    return (

        <div style={styles} className="col-md-4 col-sm-6 p-3">
            <div className="">
                {
                    doctor.image ? <img style={{ width: '100%', height: '200px' }} src={`data:image/png;base64,${doctor.image.img}`} alt="" /> :
                        <img style={{ width: '100%', height: '200px' }} src={`https://stark-shore-06055.herokuapp.com/${doctor.img}`} alt="" />
                }

                <div className="ms-2 mt-3 text-center">
                    <b><h4>{doctor.name}</h4></b>
                    <div className="d-flex   justify-content-center">
                        <FontAwesomeIcon style={{ height: '50px', color: 'green' }} icon={faPhone} />
                        <p className="mt-2 ms-2 text-center">{doctor.phone}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetail;