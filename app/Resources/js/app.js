import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory} from "react-router";
import { Provider } from "react-redux";


import Projects from "./pages/Projects.js";
import Homepage from "./pages/Homepage.js";
import Layout from "./pages/Layout.js";
import FagWiki from "./pages/FagWiki.js";
import Actors from "./pages/Actors.js";
import LogIn from "./components/LogIn.js";

import store from "./store";


const app = document.getElementById('app');

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={Layout}>
				<IndexRoute component={Homepage}></IndexRoute>
				<Route path="projects(/:project)" component={Projects}></Route>
				<Route path="actors" component={Actors}></Route>
				<Route path="fagWiki" component={FagWiki}></Route>
			</Route>
		</Router>
	</Provider>,
	app);