/** @format */

import React from "react";
import Definitions from "./Definitions";

export default function Word(props) {
	if (props.data) {
		return (
			<div className="Word mt-4">
				<h1 className="myWord text-capitalize fw-bold text-decoration-underline">
					{props.data.word}{" "}
				</h1>{" "}
				<p>
					({props.data.phonetic}){" "}
					<a
						className="phonetic"
						href={`https:${props.data.phonetics[0].audio}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						🔈
					</a>
				</p>
				<div className="row">
					<div className="col-8">
						{props.data.meanings.map(function (meaning, index) {
							return <Definitions key={index} meaning={meaning} />;
						})}
						<div className="text-start ms-5 mt-4">
							<h3 className="">Origin</h3>
							<p className="lh-sm fw-light">{props.data.origin}</p>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return null;
	}
}
