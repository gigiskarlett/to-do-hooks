import React from "react";
import ReactDOM from "react-dom";
import "./assets/main.css";
import "./assets/custom.css";
import * as serviceWorker from "./serviceWorker";
import Company from "./components/Company";

ReactDOM.render(
	<React.StrictMode>
		<Company />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
