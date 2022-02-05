import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Componente({ titulo, children }) {
  
	return (
		<div>
			<h1>{titulo}</h1>
			<div>{children}</div>
		</div>
	);
}

ReactDOM.render(
  <Componente titulo="Título 1">Hola desde React</Componente>, document.getElementById("root")
);

