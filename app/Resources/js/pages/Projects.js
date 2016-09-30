import React from "react";

import Project from "../components/Project";

export default class Projects extends React.Component {
	render() {
		const { query } = this.props.location;
		const { params } = this.props;
		const { project } = params;
		const { date, filter } = query;

		const Projects = [
			"Test Prosjekt",
			"Ett annet Prosjekt",
			"Overvanns Prosjekt",
			"Svensk Prosjekt",
			"Oslo Prosjekt",
			"Trondheim Prosjekt",
		].map((title,i) => <Project key={i} title={title} single={false}/>);

		if(project === undefined) {
			return(
				<div>
					<h1>Prosjekter</h1>
					project: {project}, date: {date}, filter: {filter}
					<div class="row">{Projects}</div>
				</div>	
			);
		}
		console.log(project);
		return (
			<div>
				<h1>{project}</h1>
				<div>
					<Project title={project} single={true}/>
				</div>
			</div>
		);

		
	}
}