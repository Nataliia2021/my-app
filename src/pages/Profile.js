import React, { useState } from 'react';
import logo1 from '../asserts/logo1.png';
import logo3 from '../asserts/logo3.png';


const Profile = () => {
  const [pets, setPets] = useState([
    {
      id: 1,
      name: 'Buddy',
      type: 'Dog',
      age: 2,
      description: 'A friendly golden retriever.',
      image: logo1,
      isAdopted: false,
    },
    {
      id: 2,
      name: 'Mittens',
      type: 'Cat',
      age: 3,
      description: 'A calm and affectionate cat.',
      image: logo3,
      isAdopted: false,
    },
  ]);

  const toggleAdoptStatus = (id) => {
    setPets((prevPets) =>
      prevPets.map((pet) =>
        pet.id === id ? { ...pet, isAdopted: !pet.isAdopted } : pet
      )
    );
  };

  return (
    <div className="App">
      <h1>Pets for Adoption</h1>
      <div className="pet-gallery">
        {pets.map((pet) => (
          <div key={pet.id} className="pet-card">
            <img src={pet.image} alt={pet.name} />
            <h3>{pet.name}</h3>
            <p>{pet.type}, {pet.age} years old</p>
            <p>{pet.description}</p>
            <button onClick={() => toggleAdoptStatus(pet.id)}>
              {pet.isAdopted ? 'Adopted' : 'Adopt Me!'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Profile;