import React from "react";

export default class extends React.Component {

	render() {
		const { title, single } = this.props;
		const path = "#/projects/"+title;
		const containerStyle = {
			color: "black"
		};
		const headerStyle = {
			color: "green"
		};
		if(single) {
			return (
				<div>
					<h2 style={containerStyle}>Description:</h2>
					<p>Placeholder some text, desctiption. Textplaceholder sometxt.</p>
					<br/>
					<h2 style={containerStyle}>Solutions used:</h2>
					<p>Raingarden, ....</p>
					<br/>
					<h2 style={containerStyle}>Created by:</h2>
					<p>Ken Lie</p>
				</div>
			);
		}
		return (
			<div class="col-md-4">
				<h2 style={headerStyle}>{title}</h2>
				<p style={containerStyle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>
				<a class="btn btn-default" href={path}>More Info</a>
			</div>
			);
	}
}

//path.replace(/( )/g ,"-")