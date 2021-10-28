/** @format */

import axios from "axios";
import React, { useState } from "react";
import Word from "./Word";

export default function Dictionary(props) {
	let [keyword, setKeyword] = useState(props.defaultKeyword);
	let [wordData, setWordData] = useState(null);
	let [loaded, setLoaded] = useState(false);
	let [photos, setPhotos] = useState(null);

	function handleDictionaryResponse(response) {
		console.log(response.data[0]);
		setWordData(response.data[0]);
	}

	function handlePexelsResponse(response) {
		console.log(response.data.photos);
		setPhotos(response.data.photos);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function search() {
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleDictionaryResponse);

		const pexelsApiKey =
			"563492ad6f91700001000001d79e41acf2274e5d94b7e84effa83e33";

		let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;

		axios
			.get(pexelsApiUrl, {
				headers: { Authorization: `Bearer ${pexelsApiKey}` },
			})
			.then(handlePexelsResponse);
	}

	function handleChange(event) {
		setKeyword(event.target.value);
	}

	function load() {
		setLoaded(true);
		search();
	}

	if (loaded) {
		return (
			<div className="Dictionary">
				<section>
					<h2>What word do you want to look up?</h2>
					<form onSubmit={handleSubmit}>
						<input type="search" onChange={handleChange} />
					</form>
					<small>suggested words: hello, sunset, beer...</small>
				</section>
				<Word data={wordData} photos={photos} />
			</div>
		);
	} else {
		load();
		return (
			<div className="spinner-border text-danger" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		);
	}
}
