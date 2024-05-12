import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./sass/nav-component.scss";
import "./sass/home.scss";
import "./sass/best-shoes-component.scss";
import "./sass/running-shoes-finder.scss";
import "./sass/training-calculator.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
