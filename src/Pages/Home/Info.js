import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const info = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-10'>
      <InfoCard cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>
      <InfoCard cardTitle="Our Location" bgClass="bg-gradient-to-r from-secondary to-accent" img={marker}></InfoCard>
      <InfoCard cardTitle="Contect Us" bgClass="bg-gradient-to-r from-primary to-secondary" img={phone}></InfoCard>
    </div>
  );
};

export default info;