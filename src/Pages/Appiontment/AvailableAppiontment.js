import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppiontment = ({date, setDate}) => {
  const [treatment, setTreatment] = useState({});

  const formattedDate = format(date, 'PP');
  //use React Query
  const {data: services, isLoading, refetch} = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
  .then(response => response.json())
  )
  
  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <div>
      <h3 className='text-xl text-center text-secondary font-bold'>Available Appointment: {format(date, 'PP')}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-10 mb-10">
        {
          services?.map(service => <Service key={service._id} service={service} setTreatment={setTreatment}></Service>)
        }
      </div>
      {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment} refetch={refetch}></BookingModal>}
    </div>
  );
};

export default AvailableAppiontment;