import React from "react";
import SkyLight from "react-skylight";

//This class is not in use atm, maybe later

export default class LogIn extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return(
			<div>
				<section>
					<h1>React Skylight</h1>
					<button onClick={() => this.refs.simpleDialog.show()}>Open Modal</button>
				</section>
				<SkyLight hideOnOverlayClicked ref="simpleDialog" title="Hi, im a simple modal">
					Hello, I dont have any callback.
				</SkyLight>
			</div>
		)
	}
}