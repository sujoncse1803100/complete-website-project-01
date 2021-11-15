import React from 'react';
import Appoinment from '../Appoinment/Appoinment';
import FeatureService from '../FeatureService/FeatureService';
import Header from '../Header/Header';
import Patient from '../Patient/Patient';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <FeatureService />
            <Appoinment />
            <Patient />
        </div>
    );
};

export default Home;