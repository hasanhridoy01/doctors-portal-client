import React, { useState } from 'react';
import Footer from '../Home/Footer';
import AppiontmentBanner from './AppiontmentBanner';
import AvailableAppiontment from './AvailableAppiontment';

const Appiontment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppiontmentBanner date={date} setDate={setDate}></AppiontmentBanner>
      <AvailableAppiontment date={date} setDate={setDate}></AvailableAppiontment>
      <Footer></Footer>
    </div>
  );
};

export default Appiontment;