import React from 'react';
import img from '../assets/images/doctor.png';
import appointment from '../assets/images/appointment.png'
import Button from './Shared/Button';

const MakeAppointment = () => {
  return (
    <section style={{
      background: `url(${appointment})`
    }} className='flex justify-center items-center'>
      <div className="flex-1 hidden lg:block">
        <img className='mt-[-140px]' src={img} alt="" />
      </div>
      <div className="flex-1 p-10">
        <h3 className='text-xl text-primary font-bold'>Appointment</h3>
        <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
        <p className='text-white my-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facilis ex soluta inventore facere. Tempore minus, corporis deserunt saepe perferendis hic quo debitis ex accusantium vitae, aperiam commodi dolores quos sapiente a nihil. Reprehenderit non facere et ex veniam placeat.</p>
        <Button>Appointment</Button>
      </div>
    </section>
  );
};

export default MakeAppointment;