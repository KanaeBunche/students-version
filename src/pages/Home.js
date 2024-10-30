// src/pages/Home.js
import React from 'react';
import CarCard from '../components/CarCard';
import cars from '../data/cars'; // Import car data

function Home() {
  return (
    <div className="home">
      <h2>Car Gallery</h2>
      <div className="car-gallery">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default Home;
