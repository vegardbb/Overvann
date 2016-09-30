import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux"; 

import { fetchUser } from "../actions/userActions";
import { fetchTweets } from "../actions/tweetsActions";


import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

@connect((store) => {
	return {
		user: store.user.user,
		userFetched: store.user.fetched,
		tweets: store.tweets.tweets,
	};
})
export default class Layout extends React.Component {
	componentWillMount(){
		this.props.dispatch(fetchUser());
	}

	fetchTweets() {
		this.props.dispatch(fetchTweets());
	}

	render() {
		const { location } = this.props;
		const containerStyle = {
			marginTop: "60px"
		};

		const {user, tweets} = this.props;
		const mappedTweets = tweets.map((tweet,i) => (<li key={i}>{tweet.text}</li>));
		
		//if(!tweets.length){
		//	return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
		//}

		return(
			<div>
				<Nav location={location} />

				<div class="container" style={containerStyle}>
					<div class="row">
						<div class="col-lg-12">
							<br/>
							<div>
								User: {this.props.user.name}, {this.props.user.age}
								<ul>{mappedTweets}</ul>
								{this.props.children}
							</div>
						</div>
					</div>
					<Footer/>
				</div>
			</div>
		);
	}
}
