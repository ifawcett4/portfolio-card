import React from "react";
import "../stylesheets/about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="section">
        <div className="main">
          {/* <img src="./WorkSample_2.jpg" alt="irina" className=""></img> */}
          <p>
            Irina is a Creative Technologist with a passion for immersive
            technology and exploring all the avenues in which art and technology
            overlap. She is currently the Social Augmented Reality Lead at
            Paradowski Creative. While she dabbles in various forms of web and
            immersive development, she has a specific focus on web XR and
            interactive exhibit based activations.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="skills">
          <h2>Skills & Tools</h2>
          <p className="box-text skills-text">
            {" "}
            XR | Lens Studio | Effect House | Meta Spark | 8th Wall | PlayCanvas
            | Web Development | Javascript | HTML | CSS | React | Three.js |
            Aframe.js | Blender | Illustrator | Photoshop | Figma | AR | Design{" "}
          </p>
        </div>
      </div>

      <div className=" section">
        <div className="publication">
          <h2>Read More</h2>
          <ul>
            <li>
              <a href="https://www.8thwall.com/blog/post/199206383173/community-spotlight-irina-and-noah-of-pixel-fish-creative">
                <h3>
                  Community Spotlight: Irina and Noah of Pixel Fish Creative |
                  Nov 2025{" "}
                </h3>
              </a>
              <p>
                {" "}
                Blending art, code, and curiosity, the duo behind Pixel Fish
                Creative share how they experiment with XR, Gaussian Splats, and
                creative technology built on top of 8th Wall Studio.
              </p>
            </li>

            {/* <li>
              <h3>Behind the Build: Tee Time At The Arcade | Oct 2025</h3>
              <p>
                How Pixel Fish reimagined mini golf with skee ball, air hockey,
                pinball, and a dash of nostalgia using 8th Wall Studio.
              </p>
            </li> */}

            <li>
              <a href="https://news.viverse.com/post/forge-the-future-game-jam-winners">
                <h3>
                  {" "}
                  VIVERSE: Epic WebXR Games You Can Play in Your Browser | Oct
                  2025
                </h3>
              </a>

              <p>
                On what they’re proud of, Meso Mountain’s creative team says
                “Overall, we are just proud of making a polished, cute, playable
                game that is now able to be shared and played. We each got to
                push our respective skills further by diving into less familiar
                territories.”
              </p>
            </li>

            <li>
              <a href="https://80.lv/articles/a-team-of-two-on-developing-a-mini-golf-game-for-8th-wall-s-game-jam">
                <h3>
                  {" "}
                  80 Level: A Team of Two on Developing a Mini Golf Game For 8th
                  Wall's Game Jam | Sept 2025
                </h3>
              </a>

              <p>
                {" "}
                We spoke about the production process behind Arcade MiniGolf,
                explaining how our latest game jam title was developed and
                shared some wisdom for those who'd like to participate in game
                jams.
              </p>
            </li>

            {/* <li>
              <h3>
                Behind the Build: Find Your Lost Dino Eggs in Meso Mountain |
                Sept 2025
              </h3>
              <p>
                How a creative duo brought a plushie-inspired 3D platformer to
                life with 8th Wall Studio.
              </p>
            </li> */}

            <li>
              <a href="https://www.8thwall.com/blog/post/193732390421/behind-the-build-telling-nydias-story-in-webar">
                <h3>
                  Behind the Build: Telling Nydia’s Story in WebAR | July 2025
                </h3>
              </a>

              <p>
                How Irina Fawcett and Noah Ilbery used 8th Wall Studio to bring
                a classical sculpture to life with VPS and Gaussian Splats.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
