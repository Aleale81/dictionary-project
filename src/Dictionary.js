/** @format */

import axios from "axios";
import React, { useState } from "react";

export default function Dictionary() {
	let [keyword, setKeyword] = useState(" ");

	function handleResponse(response) {
		console.log(response.data);
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
			<form onSubmit={search}>
				<input type="search" onChange={handleChange} />
			</form>
		</div>
	);
}
