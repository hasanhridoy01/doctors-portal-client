import React from 'react';

const service = ({service}) => {
  //Data Destracting
  const {_id, name, description, img} = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl my-20">
      <figure><img src={img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p> 
      </div>
    </div>
  );
};

export default service;