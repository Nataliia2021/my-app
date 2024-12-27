import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../asserts/logo.png';
import logo1 from '../asserts/logo1.png';
import logo3 from '../asserts/logo3.png';
import logo4 from '../asserts/logo4.png';
import logo5 from '../asserts/logo5.png';
import logo6 from '../asserts/logo6.png';
import logo7 from '../asserts/logo7.png';
import logo8 from '../asserts/logo8.png';
import logo9 from '../asserts/logo9.png';

const Profile = () => {
  const [pets] = useState([
    {
      id: 0,
      name: 'Mitten',
      type: 'Cat',
      age: 2,
      description: 'Calm, affectionate, and sweet-natured.',
      image: logo, // You can replace this with a cat image.
      isAdopted: false,
    },
    {
      id: 1,
      name: 'George',
      type: 'Dog',
      age: 3,
      description: 'Intelligent, friendly, playful, and sociable.',
      image: logo1, // You can replace this with a dog image.
      isAdopted: false,
    },
    {
      id: 2,
      name: 'Bella',
      type: 'Cat',
      age: 3,
      description: 'Vocal, active, affectionate, and social.',
      image: logo3, // You can replace this with another cat image.
      isAdopted: false,
    },
    {
      id: 3,
      name: 'Purr',
      type: 'Cat',
      age: 5,
      description: 'Energetic, intelligent, and playful.',
      image: logo4, // Replace with appropriate image.
      isAdopted: false,
    },
    {
      id: 4,
      name: 'Ana',
      type: 'Dog',
      age: 4,
      description: 'Gentle, calm, and affectionate.',
      image: logo5, // Replace with appropriate image.
      isAdopted: false,
    },
    {
      id: 5,
      name: 'Mike',
      type: 'Cat',
      age: 3,
      description: 'A curious, independent and very friendly.',
      image: logo6, // Replace with appropriate image.
      isAdopted: false,
    },
    {
      id: 6,
      name: 'Star',
      type: 'Cat',
      age: 2,
      description: 'Independent, calm, and low-maintenance.',
      image: logo7, // Replace with appropriate image.
      isAdopted: false,
    },
    {
      id: 7,
      name: 'Frodo',
      type: 'Cat',
      age: 1,
      description: 'A mischievous and playful kitten.',
      image: logo8, // Replace with appropriate image.
      isAdopted: false,
    },
    {
      id: 8,
      name: 'Grey',
      type: 'Cat',
      age: 3,
      description: 'Sweet, quiet, and affectionate.',
      image: logo9, // Replace with appropriate image.
      isAdopted: false,
    },
  ]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/form'); // Navigate to the form page
  };

  return (
    <div className="profile-page">
      <h1>Pets for Adoption</h1>
      <div className="pet-gallery">
        {pets.map((pet) => (
          <div key={pet.id} className="pet-card">
            <img src={pet.image} alt={pet.name} />
            <h3>{pet.name}</h3>
            <p>
              {pet.type}, {pet.age} month old
            </p>
            <p>{pet.description}</p>
            <button onClick={handleClick}>Adopt Me</button>
          </div>
        ))}
      </div>
      <div className="footer-text"> @2024| my final project</div>
    </div>
  );
};

export default Profile;
