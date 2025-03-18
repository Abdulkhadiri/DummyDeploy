// src/components/SecondHandCars.tsx
import React from 'react';
import './SecondHandCars.css';

const SecondHandCars: React.FC = () => {
  return (
    <div className="second-hand-cars">
      <h2>Welcome to Our Second Hand Cars Marketplace</h2>
      <p>Find your perfect used car at unbeatable prices!</p>
      <section className="car-list">
        <article className="car-item">
          <h3>2018 Toyota Camry</h3>
          <p>Mileage: 35,000 miles</p>
          <p>Price: $18,500</p>
        </article>
        <article className="car-item">
          <h3>2016 Honda Civic</h3>
          <p>Mileage: 42,000 miles</p>
          <p>Price: $14,900</p>
        </article>
        <article className="car-item">
          <h3>2017 Ford Mustang</h3>
          <p>Mileage: 28,000 miles</p>
          <p>Price: $22,000</p>
        </article>
      </section>
    </div>
  );
};

export default SecondHandCars;