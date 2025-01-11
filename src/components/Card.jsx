import React from 'react';

const Card = ( {image, name, description, buttonText} ) => {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
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
      <button className="btn btn-primary">{buttonText}</button>
    </div>
  </div>
</div>
    );
};

export default Card;