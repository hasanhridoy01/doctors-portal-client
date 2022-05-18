import React from 'react';
import appointment from '../assets/images/appointment.png';

const Contect = () => {
  return (
    <section style={{background: `url(${appointment})`}}>
      <div className="flex justify-center items-center p-28">
        <form action="">
          <label htmlFor="" className='text-white font-bold font-20'>Name</label>
          <input type="text" placeholder="Type Your Name" class="input input-bordered input-accent w-full max-w-xs" /><br />
          <label htmlFor="" className='text-white font-bold font-20'>Phone Number</label>
          <input type="text" placeholder="Type Your Phone Number" class="input input-bordered input-accent w-full max-w-xs" /><br />
          <label htmlFor="" className='text-white font-bold font-20'>Email</label>
          <input type="text" placeholder="Type Your Email" class="input input-bordered input-accent w-full max-w-xs" />
          <br />
          <button class="btn btn-success mt-3">Contect</button>
        </form>
      </div>
    </section>
  );
};

export default Contect;