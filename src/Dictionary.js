/** @format */

import axios from "axios";
import React, { useState } from "react";
import Word from "./Word";

export default function Dictionary() {
	let [keyword, setKeyword] = useState(" ");
	let [wordData, setWordData] = useState(null);

	function handleResponse(response) {
		console.log(response.data[0]);
		setWordData(response.data[0]);
	}

	function search(event) {
		event.preventDefault();

		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleChange(event) {
		setKeyword(event.target.value);
	}

	return (
		<div className="Dictionary">
			<section>
				<h2>What word do you want to look up?</h2>
				<form onSubmit={search}>
					<input type="search" onChange={handleChange} />
				</form>
				<small>suggested words: hello, sunset, beer...</small>
			</section>
			<Word data={wordData} />
		</div>
	);
}
