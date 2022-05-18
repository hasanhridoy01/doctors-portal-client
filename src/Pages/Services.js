import React from 'react';
import fluoride from '../assets/images/fluoride.png';
import cavity from '../assets/images/cavity.png';
import whitening from '../assets/images/whitening.png';
import Service from './Service';

const services = () => {
  const services = [
    {
      _id: 1,
      name: 'Fluoride Treatment',
      description: 'lorem30',
      img: fluoride
    },
    {
      _id: 2,
      name: 'Cavity Filling',
      description: 'lorem30',
      img: cavity
    },
    {
      _id: 3,
      name: 'Teeth whitening',
      description: 'lorem30',
      img: whitening
    }
  ]
  return (
    <div className='my-28'>
      <div className="text-center">
        <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
        <h2 className='text-4xl'>Services We Provide</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
          services.map(service => <Service key={service._id} service={service}></Service>)
        }
      </div>
    </div>
  );
};

export default services;