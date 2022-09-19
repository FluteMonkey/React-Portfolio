import React from 'react';
import './index.scss'
import JSLogo from '../../assets/images/logo3.png';
import HTML from '../../assets/images/logo1.png';
import CSS from '../../assets/images/logo2.png';

export default function Home() {
  return (
        <div class="about-section">
            <h2 class="section-title">About Me</h2>

            <p>
              My name is Zachary Chun, I recently dropped out of college to pursue a quicker education in the one field of study that truly interests me, which is coding.
              I learned a lot in the program I joined over the six months becoming a full stack web developer. I have learned and am willing to learn all kinds of coding languages and libraries,
              in order to expand my knowledge on the concept. As an Aspiring software engineer there are challenges that will have to be overcome and there is a drive to do so.
            </p>

            <h2>languages Known</h2>
            <ul>
              <li>
                <img src={JSLogo} alt='js icon'/>
              </li>
              <li>
              <img src={HTML} alt='js icon'/>
              </li>
              <li>
              <img src={CSS} alt='js icon'/>
              </li>
              <li>
                REACT
              </li>
              <li>
                MONGOOSE
              </li>
              <li>
                Node
              </li>
              <li>
                Express
              </li>
            </ul>
        </div>
  );
}
