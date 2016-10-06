import React from "react";

// TODO: Put footer code (footer container) from base.html.twig under footer block in return statement
export default class Footer extends React.Component {
  render() {

    const footerStyle = {
    backgroundColor: "#E5E5E5",
    position: "absolute",
    left: "0",
    bottom: "0",
    height: "50px",
    width: "100%",
    overflow:"hidden",
    };

    const centerText = {
      position: "fixed",
      left: "50%", 
      transform: "translate(-50%, 0)",
      marginTop: "15px"
    };

    return (
      <footer style={footerStyle}>
        <p style={centerText}>Copyright &copy; Ovase.no</p>
        <a href= {{ path('home') }} >Hjem</a> |
        <a href="#">Om siden</a> | 
        <a href="#popup4">Foto</a> | 
        Kontakt: mail@ovase.no |
	    {% if app.user%}
	    	Du er {{app.user}} |
			{#<a href="{{ path('logout') }}">Logg ut</a>#}
    	{% else %}
			{#<a href="{{ path('login') }}">Logg inn</a>#}
		{% endif %}
      </footer>
    );
  }
}