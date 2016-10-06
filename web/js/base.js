import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

/* No more global import
import Projects from "./pages/Projects.js";
import Homepage from "./pages/Homepage.js";
import Layout from "./pages/Layout.js";
import FagWiki from "./pages/FagWiki.js";
import Actors from "./pages/Actors.js";
import LogIn from "./components/LogIn.js";
*/
import store from "./store";


const app = document.getElementById('ovase');

ReactDOM.render(
	<Provider store={store}>
	</Provider>,
	app);
