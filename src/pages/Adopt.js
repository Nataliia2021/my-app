import React, { useState } from 'react';
import logo1 from '../asserts/logo1.png';
import logo3 from '../asserts/logo3.png';
import logo4 from '../asserts/logo4.png';
import logo5 from '../asserts/logo5.png';
import logo6 from '../asserts/logo6.png';
import logo7 from '../asserts/logo7.png';
import logo8 from '../asserts/logo8.png';
import logo9 from '../asserts/logo9.png';


function Adopt  () {
  const [likedImages, setLikedImages] = useState({
    logo1: false,
    logo3: false,
    logo4: false,
    logo5: false,
    logo6: false,
    logo7: false,
    logo8: false,
    logo9: false,
  });
  const petImages = [
    { src: logo1, title: 'George', key: 'dog1' },
    { src: logo3, title: 'Bella', key: 'cat1' },
    { src: logo4, title: 'Purr', key: 'cat2' },
    { src: logo5, title: 'Ana', key: 'dog2' },
    { src: logo6, title: 'Mike', key: 'cat3' },
    { src: logo7, title: 'Grey', key: 'cat4' },
    { src: logo8, title: 'Frodo', key: 'cat5' },
    { src: logo9, title: 'Star', key: 'cat6' },
  ];

  const handleLikeToggle = (imageKey) => {
    setLikedImages((prevState) => ({
      ...prevState,
      [imageKey]: !prevState[imageKey], // Toggle the like status
    }));
  };

  return (
    <div className="App">
    <header className="App-header">
    <h1>Adopt Page</h1>
    <p>Find your friend here!</p>
    <div className="pet-gallery">
    {petImages.map(({ src, title, key }) => (
            <div
              key={key}
              className="pet-card"
              onClick={() => handleLikeToggle(key)} // Toggle like on click
            >
              <img src={src} alt={title} />
              <div className="like-status">
                {likedImages[key] ? '❤️ Liked' : '🤍 Like'}
              </div>
            </div>
          ))}
     </div>
      </header> 
    </div>
  );
};

export default Adopt;
