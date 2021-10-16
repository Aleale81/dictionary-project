/** @format */

import React from "react";

export default function Synonyms(props) {
	if (props.synonyms.length !== 0) {
		return (
			<div className="Synonyms">
				<ul>
					<strong>Synonyms: </strong>
					{props.synonyms.map(function (synonym, index) {
						return (
							<li className="list-inline-item" key={index}>
								{synonym},
							</li>
						);
					})}
				</ul>
			</div>
		);
	} else {
		return null;
	}
}
