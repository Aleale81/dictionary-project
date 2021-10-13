/** @format */

import React from "react";

export default function Definitions(props) {
	return (
		<div className="Definitions text-start ms-5 mt-4">
			<h2>
				<em>{props.meaning.partOfSpeech}</em>
			</h2>

			<p className="lh-sm">{props.meaning.definitions[0].definition}</p>
		</div>
	);
}
