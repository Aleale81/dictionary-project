/** @format */

import React from "react";
import Synonyms from "./Synonyms";

export default function Definitions(props) {
	return (
		<div className="Definitions">
			<section>
				<h2>{props.meaning.partOfSpeech}</h2>
				{props.meaning.definitions.map(function (definition, index) {
					return (
						<div key={index}>
							<p className="definition">▪️ {definition.definition}</p>

							<p className="example ms-3">
								<em>{definition.example}</em>
							</p>

							<Synonyms synonyms={definition.synonyms} />
							<br />
						</div>
					);
				})}
			</section>
		</div>
	);
}
