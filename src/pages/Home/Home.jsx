import React from "react";
import "./Home.scss";
import HomeCarousel from "./HomeCarousel";

function Home() {
  return (
    <div className="home-main">
      <div className="home">
        <div className="welcome">
          <h1>
            Welcome to <span>Printopia.</span>
          </h1>
          <h2>Where Imagination Takes Physical Form</h2>
          <h3>Explore the Gallery</h3>
          <p>
            Dive into a diverse world of 3D prints, where creativity meets
            precision. From intricate figurines to revolutionary prototypes,
            each piece is a testament to the limitless possibilities of 3D
            printing technology. Browse our gallery to get inspired, or showcase
            your own masterpieces to the world.
          </p>
          <h3>Join the Community</h3>
          <p>
            Connect with fellow printing enthusiasts in the Printopia Forum.
            Exchange ideas, seek advice, troubleshoot, or just chat about the
            latest trends in 3D printing. Our community is a melting pot of
            experts, hobbyists, and newcomers alike, all united by a passion for
            creation.
          </p>
        </div>
        <div className="images">
          <HomeCarousel />
        </div>
      </div>
    </div>
  );
}

export default Home;
