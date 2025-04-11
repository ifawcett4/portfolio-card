import { useEffect, useState } from "react"
import iconIG from "./icons/instagram.svg"; // Import the SVG file
import iconMail from "./icons/email.svg"; // Import the SVG file
import iconLinkedIn from "./icons/linkedIn.svg"; // Import the SVG file
import me from "./itme.jpg";

function Card() {


  return (
    <div className="Card">
        <div className="content-container" >
            <div className="content-wrapper">
                <div className="title">
                    <h1> Irina Fawcett </h1>
                    <h2> creative technologist | Developer | AR Lead </h2>
                </div>

                <div className="box box-1"> 
                    <h3 className="box-header"> about </h3>

                    <p className="box-text"> Hi, I’m a creative technologist who is passionate about bringing immersive experiences to life through a variety of web, XR, and exhibit-based solutions.</p>

                    <p className="box-text">I love exploring the intersection of design and technology through new tools. I’d consider myself a generalist who dabbles in a little bit of everything as long as it means I can build something interesting.</p>

                    <p className="box-text">My full portfolio site is under construction, come back soon!</p>
                </div>

                <div className="box box-1"> 
                    <h3 className="box-header"> skills & tools </h3>
                    <p className="box-text skills-text"> Lens Studio | Effect House | Meta Spark | 8th Wall | PlayCanvas | Javascript | HTML | CSS | React | Three.js | Aframe.js | Blender | Illustrator | Photoshop | Figma | AR | Design </p>
                </div>

                <div className="icon-links">
                    <ul>
                        <li>
                            <a href="mailto:irinafawcett4@gmail.com" target="_blank" rel="noopener noreferrer">
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            {/* <!-- Font Awesome Free 6.7.2 by @fontawesome --> */}
                            <path fill="currentColor" d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/>
                            </svg>

                                <p className="link-text"> irinafawcett4@gmail.com </p>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/irina-fawcett-78b287180/" target="_blank" rel="noopener noreferrer">
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            {/* <!-- Font Awesome Free 6.7.2 by @fontawesome --> */}
                            <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                            </svg>

                                <p className="link-text"> irinafawcett </p>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/pixel_fish_creative" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="icon">
                            <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                            </svg>
                                <p className="link-text"> pixel_fish_creative </p>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/irinaf.png" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="icon">
                            <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                            </svg>
                                <p className="link-text"> irinaf.png </p>
                            </a>
                        </li>
                    </ul>
                </div>
             </div>
            <div className="video-wrapper">
                <img className="me" src={me}></img>
            </div>
        </div>
        <div className="gradient-container">
            <div className="g1"> </div>
            <div className="g2"> </div>
            <div className="g3"> </div>
            <div className="g4"> </div>
            <div className="g5"> </div>
        </div>
    </div>
  );
}

export default Card;