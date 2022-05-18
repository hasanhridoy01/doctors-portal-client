import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from '../Services';
import MakeAppointment from '../MakeAppointment';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Contect from '../Contect';

const Home = () => {
  return (
    <div className='px-12'>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <Contect></Contect>
      <Footer></Footer>
    </div>
  );
};

export default Home;