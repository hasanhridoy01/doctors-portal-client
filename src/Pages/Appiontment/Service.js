import React from 'react';

const service = ({ service, setTreatment }) => {
  //Data Destructing
  const { _id, name, slots, Price } = service;
  return (
    <div class="card max-w-lg bg-base-100 shadow-xl items-center">
      <div class="card-body text-center">
        <h2 class="text-xl font-bold text-secondary">{name}</h2>
        <p>
          {
            slots.length > 0 ? <span>{slots[0]}</span> : <span>No Slots Available</span>
          }
        </p>
        <p>price: {Price}</p>
        <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
        <div class="card-actions justify-center">
          <label onClick={() => setTreatment(service)} disabled={slots.length === 0} for="Booking-modal" class="btn btn-sm btn-secondary bg-gradient-to-r from-secondary to-primary text-white font-bold">Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default service;