import './Landing.modules.css'
import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

const Landing = () => {
    return (
        <div className="container">
            <section className="showcase">
                <div className="video-container">
                    <video src="https://player.vimeo.com/external/462160121.sd.mp4?s=b2e118eea2bcc91158332d62885b599057595636&profile_id=164&oauth2_token_id=57447761" loop autoPlay ></video>
                </div>
                <div className="content">
                    <h1>Game Spotlight</h1>
                    <h2>Discover and Explore Video Games</h2>
                    <Link to={'/home'} className='btn'>Let's Get Started</Link>
                </div>
            </section>

            <section id="about">
                <h2>About</h2>
                <p>
                    GameSpotlight is your go-to destination for all things video games. Our platform is designed to help you discover, explore, and learn about a wide range of video games from different genres and platforms. Whether you're a dedicated gamer or just looking for your next gaming adventure, GameSpotlight has you covered.
                </p>

                <h2>Follow Me On Social Media</h2>

                <div class="social">
                    <a className='linkedin' href='https://www.linkedin.com/in/david-romero-s-s/' target="_blank"><FontAwesomeIcon icon={faLinkedin} size='2xl'/></a>
                    <a className='github' href="https://github.com/daroops" target="_blank"><FontAwesomeIcon icon={faGithub}  size="2xl"/></a>
                </div>
            </section>
        </div>
    );
}

export default Landing;