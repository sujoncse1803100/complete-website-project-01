import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faCalendar, faFileMedical, faUsers, faGripHorizontal } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div style={{ backgroundColor: '#12D0D7', height: '100vh' }} className="pt-5 ps-2 sidebar d-flex flex-column justify-content-between">
            <ul className="list-unstyled">
                <li className="mb-2">
                    <Link style={{ textDecoration: 'none' }} className="text-white" to='/doctor/dashboard' >
                        <FontAwesomeIcon className="me-2" icon={faGripHorizontal} /> Dashboard
                    </Link>
                </li>
                <li className="mb-2">
                    <Link style={{ textDecoration: 'none' }} className="text-white" to='/doctor/appoinments' >
                        <FontAwesomeIcon className="me-2" icon={faCalendar} /> Appoinments
                    </Link>
                </li>
                <li className="mb-2">
                    <Link style={{ textDecoration: 'none' }} className="text-white" to='/doctor/patients' >
                        <FontAwesomeIcon className="me-2" icon={faUsers} /> Patients
                    </Link>
                </li>
                <li className="mb-2">
                    <Link style={{ textDecoration: 'none' }} className="text-white" to='/doctor/prescriptions' >
                        <FontAwesomeIcon className="me-2" icon={faFileMedical} /> Prescriptions
                    </Link>
                </li>
                <li className="mb-2">
                    <Link style={{ textDecoration: 'none' }} className="text-white" to='/doctor/setting' >
                        <FontAwesomeIcon className="me-2" icon={faCog} /> Setting
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;