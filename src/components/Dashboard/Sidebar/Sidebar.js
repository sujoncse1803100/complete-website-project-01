import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faCalendar, faFileMedical, faUsers, faUser, faGripHorizontal } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [userLoggedIn, setUserLoggedIn] = useContext(UserContext);
    const [isDoctor, setIsDoctor] = useState(false);

    useEffect(() => {
        fetch('https://stark-shore-06055.herokuapp.com/isDoctor', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: userLoggedIn.email })
        })
            .then(response => response.json())
            .then(result => setIsDoctor(result));
    }, []);

    return (
        <div style={{ backgroundColor: '#12D0D7', height: '100vh' }} className="pt-5 ps-2 sidebar d-flex flex-column justify-content-between">
            <ul className="list-unstyled">
                {
                    isDoctor &&
                    <li className="mb-3">
                        <Link style={{ textDecoration: 'none' }} className="text-white" to='/doctor/dashboard' >
                            <FontAwesomeIcon className="me-2" icon={faGripHorizontal} /> Dashboard
                        </Link>
                    </li>
                }

                <li className="mb-3">
                    <Link style={{ textDecoration: 'none' }} className="text-white" to='/doctor/appoinments' >
                        <FontAwesomeIcon className="me-2" icon={faCalendar} /> Appoinments
                    </Link>
                </li>



                {
                    isDoctor &&
                    <div>

                        <li className="mb-3">
                            <Link style={{ textDecoration: 'none' }} className="text-white" to='/doctor/patients' >
                                <FontAwesomeIcon className="me-2" icon={faUsers} /> Patients
                            </Link>
                        </li>
                        <li className="mb-3">
                            <Link style={{ textDecoration: 'none' }} className="text-white" to='/doctor/prescriptions' >
                                <FontAwesomeIcon className="me-2" icon={faFileMedical} /> Prescriptions
                            </Link>
                        </li>

                        <li className="mb-3">
                            <Link style={{ textDecoration: 'none' }} className="text-white" to='/doctor/adddoctor' >
                                <FontAwesomeIcon className="me-2" icon={faUser} /> Add Doctor
                            </Link>
                        </li>

                        <li className="mb-3">
                            <Link style={{ textDecoration: 'none' }} className="text-white" to='/doctor/setting' >
                                <FontAwesomeIcon className="me-2" icon={faCog} /> Setting
                            </Link>
                        </li>
                    </div>
                }
            </ul>
        </div>
    );
};

export default Sidebar;