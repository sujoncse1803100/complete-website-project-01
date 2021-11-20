import React, { useContext } from 'react';
import MakeAppoinMent from '../MakeAppoinMent/MakeAppoinMent';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Doctor from '../Doctor/Doctor';
import FeatureService from '../FeatureService/FeatureService';
import Header from '../Header/Header';
import Testimonial from '../Testimonial/Testimonial';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';
// import { UserContext } from './../../../App';

const Home = () => {
    // const [userLoggedIn, setUserLoggedIn] = useContext(UserContext);
    return (
        <div>
            {/* <h2 className="text-center">Email : {userLoggedIn.email}</h2> */}

            <Header />
            <Services />
            <FeatureService />
            <MakeAppoinMent />
            <Testimonial />
            <Blog />
            <Doctor />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;