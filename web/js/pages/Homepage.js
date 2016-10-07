import React from "react";

import Project from "../components/Project.js";
import LogIn from "../components/LogIn.js"

export default class Homepage extends React.Component {
	constructor() {
		super();
		this.state = {randomProject: this.getRandomProject()};
	}
	getRandomProject() {
		const randomProjects = [
			"Random Prosjekt #1",
			"Random Prosjekt #2",
			"Random Prosjekt #3",
			"Random Prosjekt #4",
			"Random Prosjekt #5",
		];

		const randomProject = randomProjects[Math.round( Math.random()*(randomProjects.length-1) )];
		
		return randomProject

	}

	render() {
		const Projects = [
			"Overvanns Prosjekt",
			"Trondheim Prosjekt",
			"Oslo Prosjekt",
		].map((title, i) => <Project key={i} title={title} single={false}/>);


		//When a user change page in the middle of the timeout, we get a warning because this cant render anymore (fix?)
		/*setTimeout(() =>{
			this.setState({randomProject: this.getRandomProject()});
		},5000)*/

		return(
			<div>
				<div class="row">
					<div class="col-lg-12">
						<div class="well text-center">
							{this.state.randomProject}
						</div>
					</div>
				</div>

				<div class="row">{Projects}</div>
				</div>
		);
	}
}