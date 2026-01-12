import React, { useEffect } from "react";
import "../stylesheets/about.scss";
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Sparkles, Shadow, ContactShadows, Billboard, Environment, BakeShadows, OrbitControls } from '@react-three/drei'


const About = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.about .section');
    if (!sections) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (

    <div className="about-page">
      {/* <Canvas className="about-canvas" camera={{ position: [0, 0, 5], fov: 50 }}>
        <Sparkles count={100} scale={[10, 5, 10]} size={0.5} speed={0.05} />
      </Canvas> */}
      
      <div className="about">
      <div className="section">
        <div className="main">
          {/* <img src="./WorkSample_2.jpg" alt="irina" className=""></img> */}
          <p>
            Hi! I'm Irina Fawcett, a Creative Technologist with a passion for all things immersive tech. 
            I love exploring the intersection of art and technology. My expertise lies in web XR and interactive 
            exhibit-based activations, but I enjoy dabbling in a variety of web, immersive development, 3D, and design expolorations.
          </p>

          <p> 
            Oustide of work I continue to explore creative technology through passion projects at Pixel Fish Creative,
             a co-creative outlet for my partner and me. I also enjoy various video games (currently finishing BG3), photography, fantasy books, and I'm always looking for new restaurants to try in St. Louis!
          </p>

                <div className="icon-links">
        <ul>
          <li>
            <a
              href="mailto:irinafawcett4@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                {/* <!-- Font Awesome Free 6.7.2 by @fontawesome --> */}
                <path
                  fill="currentColor"
                  d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"
                />
              </svg>

              <p className="link-text"> irinafawcett4@gmail.com </p>
            </a>
          </li>
          <li>
            <a
              href="linkedin.com/in/irina-fawcett-78b287180 "
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                {/* <!-- Font Awesome Free 6.7.2 by @fontawesome --> */}
                <path
                  fill="currentColor"
                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                />
              </svg>

              <p className="link-text"> irinafawcett </p>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/pixel_fish_creative/profilecard/?igsh=MTJjbXVpNzRtMzVwYQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="icon"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
              <p className="link-text"> pixel_fish_creative </p>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/irinaf.png?igsh=cmx3MGh0eDE2NWZh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="icon"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
              <p className="link-text"> irinaf.png </p>
            </a>
          </li>
        </ul>
      </div>
        </div>
      </div>

      <div className="section">
        <div className="skills">
          <h2>Skills and Background</h2>

          <p> My current role is Social AR Lead at Paradowski Creative at which I have been expoloring AR and 
            immersive technology at since my internship in 2021. I graduated with a B.F.A in Interactive Design from Maryville University of Saint Louis 2021. As a generalist I have experience with a variety of tools with a primary focus on AR and Front end Web Dev languages.</p>
          <p className="box-text skills-text">
            {" "}
            XR | AR | Lens Studio (Snapchat) | Effect House (Tik Tok) | Meta Spark (Instagram) | 8th Wall | PlayCanvas
            | Web Development | JavaScript | HTML | CSS | React | Three.js |
            Aframe.js | Node.js | Git | Blender | Adobe Illustrator | Adobe Photoshop | 
            Figma | Design | Creative Concepting | Research and Development | Game Dev | Unity | Godot {" "}
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
    </div>

  );
};

export default About;
