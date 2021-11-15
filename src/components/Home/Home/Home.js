import React from 'react';
import Appoinment from '../Appoinment/Appoinment';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Doctor from '../Doctor/Doctor';
import FeatureService from '../FeatureService/FeatureService';
import Footer from '../Footer/Footer';
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
            <Blog />
            <Doctor />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;