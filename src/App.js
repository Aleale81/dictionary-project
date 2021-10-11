/** @format */

import dictionary1 from "./dictionary1.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
	return (
		<div className="App">
			<div className="container">
				<header className="App-header">
					<img src={dictionary1} className="Image" alt="dictionary" />
				</header>
				<main>
					<Dictionary />
				</main>
				<footer className="Footer">
					{" "}
					<a
						href="https://github.com/Aleale81/dictionary-project"
						target="_blank"
						rel="noopener noreferrer"
					>
						Open-sourse code
					</a>{" "}
					by Alessandra Scarpellini{" "}
				</footer>
			</div>
		</div>
	);
}

export default App;
