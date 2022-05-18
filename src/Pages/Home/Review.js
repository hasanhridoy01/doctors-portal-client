import React from 'react';

const Review = ({reviewe}) => {
  const {_id, name, review, location, img} = reviewe;
  return (
    <div className="card w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsa, odio est fuga sequi officiis.</p>
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="">
            <h4 className='text-xl'>{name}</h4>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;