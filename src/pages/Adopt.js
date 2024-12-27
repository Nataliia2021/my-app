import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import catSound from '../asserts/cat-sound.wav'; // Cat-specific sound
import dogSound from '../asserts/dog-sound.wav'; // Dog-specific sound
import sadSound from '../asserts/sad-sound.wav'; // Sad sound for unliking
import logo from '../asserts/logo.png';
import logo1 from '../asserts/logo1.png';
import logo3 from '../asserts/logo3.png';
import logo4 from '../asserts/logo4.png';
import logo5 from '../asserts/logo5.png';
import logo6 from '../asserts/logo6.png';
import logo7 from '../asserts/logo7.png';
import logo8 from '../asserts/logo8.png';
import logo9 from '../asserts/logo9.png';

function Adopt() {
  // Default click sound
  const [playCatSound] = useSound(catSound); // Cat-specific sound
  const [playDogSound] = useSound(dogSound); // Dog-specific sound
  const [playSadSound] = useSound(sadSound); // Sad sound for unliking

  const [likedImages, setLikedImages] = useState({
    logo: false,
    logo1: false,
    logo3: false,
    logo4: false,
    logo5: false,
    logo6: false,
    logo7: false,
    logo8: false,
    logo9: false,
  });

  const [totalDonation, setTotalDonation] = useState(0); // Track the total donation

  const petImages = [
    { src: logo, title: 'Mitten', key: 'cat' },
    { src: logo1, title: 'George', key: 'dog1' },
    { src: logo3, title: 'Bella', key: 'cat1' },
    { src: logo4, title: 'Purr', key: 'cat2' },
    { src: logo5, title: 'Ana', key: 'dog2' },
    { src: logo6, title: 'Mike', key: 'cat3' },
    { src: logo7, title: 'Grey', key: 'cat4' },
    { src: logo8, title: 'Frodo', key: 'cat5' },
    { src: logo9, title: 'Star', key: 'cat6' },
  ];

  useEffect(() => {
    // Retrieve the likes data from local storage if it exists
    const storedLikes = JSON.parse(localStorage.getItem('likedImages')) || {};
    const storedDonation = Number(localStorage.getItem('totalDonation')) || 0;

    setLikedImages(storedLikes);
    setTotalDonation(storedDonation);
  }, []);

  const handleLikeToggle = (imageKey) => {
    if (likedImages[imageKey]) {
      setLikedImages((prevState) => {
        const updatedLikes = { ...prevState, [imageKey]: false };
        localStorage.setItem('likedImages', JSON.stringify(updatedLikes));
        return updatedLikes;
      });
      setTotalDonation((prevDonation) => {
        const newTotal = prevDonation - 1;
        localStorage.setItem('totalDonation', newTotal);
        return newTotal;
      });
      playSadSound(); // Play sad sound when unliking
    } else {
      setLikedImages((prevState) => {
        const updatedLikes = { ...prevState, [imageKey]: true };
        localStorage.setItem('likedImages', JSON.stringify(updatedLikes));
        return updatedLikes;
      });
      setTotalDonation((prevDonation) => {
        const newTotal = prevDonation + 1;
        localStorage.setItem('totalDonation', newTotal);
        return newTotal;
      });
      playSoundForPet(imageKey); // Play sound based on pet type (cat/dog)
    }
  };
  // Function to play a different sound for cats and dogs
  const playSoundForPet = (key) => {
    if (key.toLowerCase().includes('cat')) {
      playCatSound(); // Play the cat sound
    } else if (key.toLowerCase().includes('dog')) {
      playDogSound(); // Play the dog sound
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Donate today to a pet</h1>
        <p>Your like gives $1 to a pet!</p>

        {/* Display the total donation amount */}
        <div className="total-donation">
          <h2>Total Donation: ${totalDonation}</h2>
        </div>

        <div className="pet-gallery">
          {petImages.map(({ src, title, key }) => (
            <div
              key={key}
              className="pet-card"
              onClick={() => {
                handleLikeToggle(key); // Toggle the like
              }}
            >
              <img src={src} alt={title} />
              <div className="like-status">
                {likedImages[key] ? '❤️ Liked' : '🤍 Like'}
              </div>
            </div>
          ))}
        </div>
      </header>
      <div className="footer-text"> @2024| my final project</div>
    </div>
  );
}

export default Adopt;
