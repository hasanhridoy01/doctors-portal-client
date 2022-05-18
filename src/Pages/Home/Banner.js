import React from 'react';
import bannerImg from '../../assets/images/chair.png';
import Button from '../Shared/Button';

const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerImg} className="max-w-md rounded-lg shadow-2xl" />
        <div className='pr-10'>
          <h1 className="text-6xl font-bold">Your New Smile Start Here</h1>
          <p className="py-6 text-2xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;