import React from 'react';
import VideoPlayer from '../asserts/VideoPlayer.mp4'; // Adjust the path as needed

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="video-frame">
          <video width="100%" height="auto" controls autoPlay muted loop>
            <source
              src={VideoPlayer}
              className="App-logo"
              alt="logo"
              type="video/mp4"
            />
          </video>
          <section className="media-feed">
            {/* Media posts, grid or list layout */}
          </section>
        </div>
        <h1>Welcome to the Home Page!</h1>
        <p>Here you can help to find a new family for a pet</p>
      </header>
      <div className="footer-text"> @2024| my final project</div>
    </div>
  );
};

export default Home;
