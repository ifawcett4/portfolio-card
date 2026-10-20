import React, { useEffect } from "react";
import "../stylesheets/about.scss";
import WorkSample2 from "../WorkSample_2.jpg";

const awards = [
//   {
//     type: "Webby Award",
//     year: "2026",
//     dateTime: "2026",
//     result: "Honoree",
//     project: "Saint Louis Zoo Map",
//     detail: "Websites and Mobile Sites · Cultural Institutions",
//     href: "/work/project/saint-louis-zoo-ar-education",
//   },
  {
    type: "Webby Award",
    year: "2025",
    dateTime: "2025",
    result: "Honoree",
    project: "Purina Arena Pet Racing",
    detail: "AI, Immersive & Games",
    href: "/work/project/purina-arena-pet-racing",
  },

  {
    type: "8th Wall × VIVERSE Game Jam",
    year: "2025",
    dateTime: "2025",
    result: "2nd Place",
    project: "Meso Mountain",
    detail: "Forge the Future Game Jam",
    href: "https://www.8thwall.com/blog/post/192402948989/announcing-the-winners-forge-the-future-game-jam",
  },
  {
    type: "8th Wall Challenge",
    year: "2025",
    dateTime: "2025",
    result: "VPS Grand Prize",
    project: "Nydia: The Blind Flower Girl",
    detail: "Real World Impact Challenge",
    href: "/work/project/nydia-the-blind-flower-girl",
  },
  {
    type: "8th Wall Game Jam",
    year: "2025",
    dateTime: "2025",
    result: "1st Place",
    project: "Arcade Mini Golf",
    detail: "Ultimate Mini Golf Game Jam",
    href: "https://80.lv/articles/a-team-of-two-on-developing-a-mini-golf-game-for-8th-wall-s-game-jam",
  },
  {
    type: "Webby Award",
    year: "2024",
    dateTime: "2024",
    result: "People’s Voice Winner - Best Narrative Experience",
    project: "The Escape Artist",
    detail: "AI, Immersive & Games",
    href: "https://winners.webbyawards.com/2024/ai-immersive-games/immersive-features/best-narrative-experience/285660/the-escape-artist",
  },
];

const articles = [
  {
    type: "8th Wall",
    year: "2025",
    title: "Community Spotlight: Irina and Noah of Pixel Fish Creative",
    detail:
      "Blending art, code, and curiosity, the duo share their experiments with XR, Gaussian Splats, and creative technology built on 8th Wall Studio.",
    href: "/PDFS/Community Spotlight_ Irina and Noah of Pixel Fish Creative _ 8th Wall.pdf",
  },
  {
    type: "8th Wall",
    year: "2025",
    title: "Behind the Build: Tee Time At The Arcade",
    detail:
      "How Pixel Fish reimagined mini golf with skee ball, air hockey, pinball, and a dash of nostalgia using 8th Wall Studio.",
    href: "/PDFS/Behind the Build_ Tee Time At The Arcade _ 8th Wall.pdf",
  },
  {
    type: "VIVERSE",
    year: "2025",
    title: "Epic WebXR Games You Can Play in Your Browser",
    detail:
      "A look at the winning games from VIVERSE’s Forge the Future Game Jam, including Meso Mountain.",
    href: "https://news.viverse.com/post/forge-the-future-game-jam-winners",
  },
  {
    type: "80 Level",
    year: "2025",
    title: "A Team of Two on Developing a Mini Golf Game for 8th Wall’s Game Jam",
    detail:
      "Inside the production process behind Arcade Mini Golf and lessons from participating in game jams.",
    href: "https://80.lv/articles/a-team-of-two-on-developing-a-mini-golf-game-for-8th-wall-s-game-jam",
  },
  {
    type: "8th Wall",
    year: "2025",
    title: "Behind the Build: Find Your Lost Dino Eggs in Meso Mountain",
    detail:
      "How a creative duo brought a plushie-inspired 3D platformer to life with 8th Wall Studio.",
    href: "/PDFS/Behind the Build_ Find Your Lost Dino Eggs in Meso Mountain _ 8th Wall.pdf",
  },
  {
    type: "8th Wall",
    year: "2025",
    title: "Behind the Build: Telling Nydia’s Story in WebAR",
    detail:
      "How Irina Fawcett and Noah Ilbery used VPS and Gaussian Splats to bring a classical sculpture to life.",
    href: "/PDFS/Behind the Build_ Telling Nydia’s Story in WebAR _ 8th Wall.pdf",
  },
];

const externalLinkProps = (href) =>
  href.startsWith("http")
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

const About = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".about .section");
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page">
      <div className="about">
        <section className="section about-intro">
          <div className="intro-card">
            <div className="main">
              <img src={WorkSample2} alt="Irina Fawcett" />
              <div className="about-main-right">
                <h2> Hi! I’m Irina!</h2>
                <p className="body-text">
                  I’m a Creative Technologist with five years of
                  agency experience working in immersive technology and a
                  specialized focus in Augmented Reality. But really, I’m just
                  someone who can’t pick between design and development and loves
                  making cool things. The more interactive and immersive the
                  better! I enjoy dabbling in 3D, web, XR, and interactive
                  installations.
                </p>
                <p className="body-text">
                  Outside of work, I continue to explore creative technology
                  through passion projects at Pixel Fish Creative, a co-creative
                  outlet for my partner and me. I also enjoy various video games
                  (currently playing Pokopia), photography, fantasy books, and
                  I&apos;m always looking for new restaurants to try!
                </p>
                <div className="icon-links" role="group" aria-label="Social links">
                  <a href="mailto:irinafawcett4@gmail.com" aria-label="Email Irina">
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" /></svg>
                    <span>Email</span>
                  </a>
                  <a href="https://www.linkedin.com/in/irina-fawcett-78b287180" target="_blank" rel="noopener noreferrer" aria-label="Irina on LinkedIn">
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://www.instagram.com/pixel_fish_creative/" target="_blank" rel="noopener noreferrer" aria-label="Pixel Fish Creative on Instagram">
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                    <span>Instagram</span>
                  </a>
                  <a href="https://www.behance.net/irinafawcett1" target="_blank" rel="noopener noreferrer" aria-label="Irina on Behance">
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" aria-hidden="true"><path fill="currentColor" d="M232 237.2c31.8-15.2 50.4-35.2 50.4-74 0-70.6-52.6-87.8-113.7-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1l.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" /></svg>
                    <span>Behance</span>
                  </a>
                  <a href="https://www.youtube.com/@PixelFishCreative" target="_blank" rel="noopener noreferrer" aria-label="Pixel Fish Creative on YouTube">
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" aria-hidden="true"><path fill="currentColor" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5C51.1 81.8 32.6 100.4 26.3 124.1 14.9 167 14.9 256.4 14.9 256.4s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" /></svg>
                    <span>YouTube</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="scroll-arrow" aria-hidden="true">↓</div> */}
        </section>

        <section className="section skills-section">
          <div className="skills-card">
            <div className="skills">
              <h2>Skills and Background</h2>
              <p className="body-text">
                I’m a Creative Technologist who operates as a sort of self-sufficient ultra generalist at the 
                intersection of design and development. I have five years of experience working as a creative developer 
                at an ad agency on the Emerging Technology team at which I concepted, designed, and developed a variety of
                 projects including websites, exhibit activations, AR, VR, and even games. I love to be present in all stages 
                 of the pipeline and am comfortable with quick prototyping and experimentation. I strive to make work that is
                  engaging and interactive for the intended audience. In my current role as Social Augmented Reality Lead, I
                   act as a thought leader, subject matter expert, and developer for a variety of interactive web technologies,
                    with a specialized focus in augmented reality. I am looking to expand that creative and technical skillset
                     to more interactive technology executions with forward thinking creatives.

              </p>
              <ul className="skill-tags">
                {/* <!-- Web Development --> */}
                <li>Front-End Development</li>
                <li>Web Development</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>HTML / CSS</li>
                <li>React</li>
                <li>Three.js</li>
                <li>React Three Fiber</li>
                <li>A-Frame</li>
                <li>PlayCanvas</li>
                <li>Node.js</li>
                <li>npm</li>
                <li>Git</li>
                <li>GitHub</li>
                
                {/* <!-- Immersive & Spatial Computing --> */}
                <li>Extended Reality (XR)</li>
                <li>Augmented Reality (AR)</li>
                <li>Virtual Reality (VR)</li>
                <li>Mixed Reality (MR)</li>
                <li>WebXR</li>
                {/* <li>Immersive Experience Design</li> */}
                <li>Experiential Design</li>
                {/* <li>Spatial Interaction Design</li> */}
                <li>3D Interaction Design</li>
                <li>Location-Based Experiences</li>
                {/* <li>World Tracking &amp; Image Tracking</li> */}

                {/* <!-- Creative Technology & Prototyping --> */}
                {/* <li>Creative Technology</li> */}
                {/* <li>Creative Coding</li> */}
                <li>Emerging Technology</li>
                <li>R&amp;D</li>
                {/* <li>Experimental Prototyping</li> */}
                <li>Rapid Prototyping</li>
                <li>Technical Art</li>
                <li>Real-Time Rendering</li>
                <li>3D Visualization</li>
                <li>Photogrammetry</li>
                <li>MediaPipe</li>
                <li>WebGL</li>

                {/* <!-- Design & Creative Strategy --> */}
                <li>Interaction Design</li>
                {/* <li>Interactive Design</li> */}
                <li>UX / UI</li>
                <li>Web Design</li>
                {/* <li>Responsive &amp; Adaptive Experiences</li> */}
                {/* <li>User Research</li> */}
                <li>Design Thinking</li>
                <li>Creative Strategy</li>
                {/* <li>Concept Development</li> */}
                {/* <li>Creative Concepting</li> */}
                <li>Creative Direction</li>

   

                {/* <!-- XR Platforms & Tools --> */}
                <li>8th Wall</li>
                <li>Lens Studio</li>
                <li>Effect House</li>
                <li>Meta Spark</li>

                {/* <!-- Game Development & 3D --> */}
                <li>Game Design</li>
                <li>Game Development</li>
                <li>Unity</li>
                <li>Godot</li>
                <li>Blender</li>

                {/* <!-- Design & Creative Software --> */}
                <li>Figma</li>
                <li>Illustrator</li>
                <li>Photoshop</li>
                <li>After Effects</li>

              </ul>
            </div>
            <a className="resume-link" href="/PDFS/Resume_Irina_Fawcett_2026 (1).pdf" download="Irina_Fawcett_Resume_2026">
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" aria-hidden="true">
                <path fill="currentColor" d="M352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96L288 306.7L246.6 265.3C234.1 252.8 213.8 252.8 201.3 265.3C188.8 277.8 188.8 298.1 201.3 310.6L297.3 406.6C309.8 419.1 330.1 419.1 342.6 406.6L438.6 310.6C451.1 298.1 451.1 277.8 438.6 265.3C426.1 252.8 405.8 252.8 393.3 265.3L352 306.7L352 96zM160 384C124.7 384 96 412.7 96 448L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 448C544 412.7 515.3 384 480 384L433.1 384L376.5 440.6C345.3 471.8 294.6 471.8 263.4 440.6L206.9 384L160 384zM464 440C477.3 440 488 450.7 488 464C488 477.3 477.3 488 464 488C450.7 488 440 477.3 440 464C440 450.7 450.7 440 464 440z" />
              </svg>
              <span>Download Resume</span>
            </a>
          </div>
        </section>

        <section className="section awards-section" aria-labelledby="awards-heading">
          <div className="awards">
            <h2 id="awards-heading">Awards &amp; Recognition</h2>
            <ul>
              {awards.map((award) => (
                <li key={`${award.year}-${award.project}`}>
                  <a
                    className="recognition-card"
                    href={award.href}
                    aria-label={`${award.year} ${award.type}: ${award.result} ${award.project}`}
                    {...externalLinkProps(award.href)}
                  >
                    <div className="recognition-meta">
                      <span>{award.type}</span>
                      <time dateTime={award.dateTime}>{award.year}</time>
                    </div>
                    <h3><strong>{award.result}</strong> | {award.project}</h3>
                    <p>{award.detail}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section publication-section" aria-labelledby="read-more-heading">
          <div className="publication">
            <h2 id="read-more-heading">Read More</h2>
            <ul>
              {articles.map((article) => (
                <li key={article.title}>
                  <a
                    className="recognition-card"
                    href={article.href}
                    {...externalLinkProps(article.href)}
                  >
                    <div className="recognition-meta">
                      <span>{article.type}</span>
                      <time dateTime={article.year}>{article.year}</time>
                    </div>
                    <h3>{article.title}</h3>
                    <p>{article.detail}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;