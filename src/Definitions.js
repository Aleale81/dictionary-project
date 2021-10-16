/** @format */

import React from "react";
import Synonyms from "./Synonyms";

export default function Definitions(props) {
	return (
		<div className="Definitions mt-4">
			<h2>
				<em>{props.meaning.partOfSpeech}</em>
			</h2>
			{props.meaning.definitions.map(function (definition, index) {
				return (
					<div key={index}>
						<p>
							<strong>Definition: </strong>
							{definition.definition}
						</p>

						<p>
							<strong>Example: </strong>
							{definition.example}
						</p>

						<Synonyms synonyms={definition.synonyms} />
						<br />
					</div>
				);
			})}
		</div>
	);
}
