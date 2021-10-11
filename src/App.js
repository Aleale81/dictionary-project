/** @format */

import dictionary1 from "./dictionary1.png";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={dictionary1} className="Image" alt="dictionary" />
				<button className="btn btn-primary">search</button>
				<footer className="Footer">
					{" "}
					<a href="http://" target="_blank" rel="noopener noreferrer">
						Open-sourse code
					</a>{" "}
					by Alessandra Scarpellini{" "}
				</footer>
			</header>
		</div>
	);
}

export default App;
