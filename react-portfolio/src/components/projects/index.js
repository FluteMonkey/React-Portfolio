import React, { useState } from 'react';
import './index.scss';


export default function Projects() {

    const [projectInfo] = useState([
        {
            name: 'PWA-TextEdit',
            website: 'https://boiling-sands-76570.herokuapp.com/',
            github: 'https://github.com/FluteMonkey/PWA-TextEdit'
        },
        {
            name: 'Note Taker',
            website: 'https://young-badlands-78657.herokuapp.com/',
            github: 'https://github.com/FluteMonkey/BIG-Note-Taker'
        },
        {
            name: 'Weather Dashboard',
            website: 'https://flutemonkey.github.io/Weather-Dashboard/',
            github: 'https://github.com/FluteMonkey/Weather-Dashboard'
        },
        {
            name: 'Work Day Scheduler',
            website: 'https://flutemonkey.github.io/Work-Day-Scheduler/',
            github: 'https://github.com/FluteMonkey/Work-Day-Scheduler'
        },
        {
            name: 'The Last Chapter',
            website: 'https://still-escarpment-06943.herokuapp.com/',
            github: 'https://github.com/Soulreaper077/The-last-chapter'
        },
        {
            name: 'Recipe and Beverage Finder',
            website: 'https://itsmarcotime.github.io/Recipe-and-Beverage-Finder/',
            github: 'https://github.com/itsmarcotime/Recipe-and-Beverage-Finder'
        }
    ]);

    return (
        <div>
			<div className="flex-row">
				<div className="projectBox">
					{projectInfo.map((project, i) => (
						<div key={project.name}>
							<div className="projectInfo">
								<div className="projectText">
									<a href={project.website}>
									<h6>{project.name}</h6>
									</a>
								</div>
								<div className="githubKitty">
								<i className="fa-brands fa-github fa-2xl"></i>
								</div>
							</div>
							<img
								src={require(`../../assets/projects/${i}.png`)}
								alt={project.name}
								className="img-thumbnail"
								key={project.name}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
    )
}