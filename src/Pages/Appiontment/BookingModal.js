import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({date, treatment, setTreatment, refetch}) => {
  const {_id, name, slots, Price} = treatment;
  const [user] = useAuthState(auth);

  //form submit
  const handleBooking = e => {
    e.preventDefault();
    
    //get slots value
    const slots = e.target.slots.value;
    const phone = e.target.phone.value;
    const formattedDate = e.target.formattedDate.value;
    
    //Booking info
    const booking = {
      treatmentId: _id,
      treatmentName: name,
      date: formattedDate,
      slots,
      Price,
      patientEmail: user.email,
      patientName: user.displayName,
      phoneNumber: phone,
    }

    //send data with database
    fetch('http://localhost:5000/booking', {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(booking)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if(data.success){
        toast(`Appointment is set ${formattedDate} at ${slots}`);
      }else{
        toast.error(`You already have an Appointment ${data.booking?.data}`);
      }
      //call the refetch 
      refetch();
      //for null value and to close the modal
      setTreatment(null);
    })
  }
  return (
    <div>
      <input type="checkbox" id="Booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle p-10">
        <div class="modal-box">
          <label for="Booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 justify-items-center'>
            <input type="text" name='formattedDate' readOnly disabled value={format(date, 'PP')} class="input input-bordered input-secondary w-full max-w-xs" />
            <select name='slots' class="select select-success w-full max-w-xs">
              {
                slots?.map(slot => <option value={slot}>{slot}</option>)
              }
            </select>
            <input type="text" readOnly disabled value={user?.displayName || ''} name='name' placeholder="Your Name" class="input input-bordered input-secondary w-full max-w-xs" />
            <input type="text" readOnly disabled value={Price} name='price' class="input input-bordered input-secondary w-full max-w-xs" />
            <input type="text" readOnly disabled value={user?.email || ''} name='email' placeholder="Your Email" class="input input-bordered input-secondary w-full max-w-xs" />
            <input type="text" name='phone' placeholder="Your Phone" class="input input-bordered input-secondary w-full max-w-xs" />
            <input type="submit" value='Submit' class="btn btn-secondary text-white font-bold" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;