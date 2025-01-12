import React from 'react';
import { Meteors } from './Meteors';

const Card = ( {image, name, description, buttonText} ) => {
    return (
        <div className="card bg-gradient-to-t from-slate-50 to-gray-50 w-96 shadow-2xl ">
  <figure className="px-10 pt-10">
    
    <img
      src={image}
      alt={name}
      className="rounded-xl" 
      style={{ width: '200px', height: '200px', objectFit: 'cover' }}/>
  </figure>
  <div className="card-body items-center text-center">

    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className="card-actions">
      <button className="btn bg-pink-300 hover:bg-pink-400  ">{buttonText}</button>
    </div>
  </div>
</div>
    );
};

export default Card;