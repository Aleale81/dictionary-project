/** @format */

import React from "react";

export default function Definitions(props) {
	return (
		<div className="Definitions mt-4">
			<h2>
				<em>{props.meaning.partOfSpeech}</em>
			</h2>
			{props.meaning.definitions.map(function (definition, index) {
				return (
					<p className="lh-sm" key="index">
						{definition.definition}
					</p>
				);
			})}
		</div>
	);
}
