import React, { useState } from 'react';
import HeartButton from './HearButton'; // Keep this as is
import Counter from './Counter';

function CarCard({ car }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} className="car-image" />
      <h2>{car.name}</h2>
      
      {/* Step 1: Implement the toggle functionality */}
      <button 
        onClick={() => {
          // TODO: Toggle the showMore state
        }}
      >
        {/* Step 2: Change this text based on the showMore state */}
        {/* Example: "Show More" if showMore is false, "Show Less" if true */}
      </button>
      
      {/* Step 3: Conditionally render the car description based on the showMore state */}
      {showMore && <p>{car.description}</p>}
      
      <Counter />
      <HeartButton />
    </div>
  );
}

export default CarCard;
