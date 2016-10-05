import React from "react";
import SkyLight from "react-skylight";

export default class Nav extends React.Component {
	constructor() {
		super();
		this.state = {
			collapsed: true,
		};
	}

	toggleCollapse() {
		const collapsed = !this.state.collapsed;
		this.setState({collapsed});
	}

	render() {

		const { location } = this.props;
		const { collapsed } = this.state;
		const homepageClass = location.pathname === "/" ? "active" : "";
		const projectsClass = location.pathname.match(/^\/projects/) ? "active" : "";
		const actorsClass = location.pathname.match(/^\/actors/) ? "active" : "";
		const fagWikiClass = location.pathname.match(/^\/fagWiki/) ? "active" : "";

		const buttonStyle = {
			marginTop: "13px",
			marginLeft: "60px",
			backgroundColor: "#E5E5E5",
			border: "1px solid #000000",
			color: "#6F6F6F",
			fontWeight: 700,
		};

		const navbarButtonStyle = {
			color: "black",
			backgroundColor: "#E5E5E5",
		};

		const navbarTextSyle = {
			color:'#6D6D6D',
			fontWeight: 700,
		};

		const navClass = collapsed ? "collapse" : "";

		return (
			<nav class="navbar navbar-fixed-top navbar-custom" role="navigation">
				<div class="container">
				<p style = {{color:"#6D6D6D",fontWeight:"400",fontSize: "200%"}}> OVASE </p>
					<div class="navbar-header">
				    	<button type="button" class="navbar-toggle" style={buttonStyle} onClick={this.toggleCollapse.bind(this)} >
				        	<span class="sr-only">Toggle navigation</span>
				        	<span class="icon-bar"></span>
				        	<span class="icon-bar"></span>
				        	<span class="icon-bar"></span>
				      	</button>
				    </div>
				    <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
				    	<ul class="nav navbar-nav" style={navbarButtonStyle}>
							<li class={homepageClass}>
								<IndexLink to="/" style={navbarTextSyle} onClick={this.toggleCollapse.bind(this)}>FRAMSIDE</IndexLink>
							</li>
							<li class={projectsClass}>
								<Link to="projects" style={navbarTextSyle} onClick={this.toggleCollapse.bind(this)}>PROSJEKTER</Link>
							</li>
							<li class={actorsClass}>
								<Link to="actors" style={navbarTextSyle} onClick={this.toggleCollapse.bind(this)}>AKTØRER</Link>
							</li>
							<li class={fagWikiClass}>
								<Link to="fagWiki" style={navbarTextSyle} onClick={this.toggleCollapse.bind(this)}>FAGWIKI</Link>
							</li>
							<li>
								<div>
									<section>
										<button style={buttonStyle} onClick={() => this.refs.simpleDialog.show()}>LOGG INN</button>
									</section>
									<SkyLight hideOnOverlayClicked ref="simpleDialog" title="Logg inn">
										Brukernavn:
										Passord:
									</SkyLight>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}