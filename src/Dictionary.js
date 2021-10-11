/** @format */

import React, { useState } from "react";

export default function Dictionary() {
	let [keyword, setKeyword] = useState(" ");
	function search(event) {
		event.preventDefault();
		alert(`Searching for ${keyword} definition...`);
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
