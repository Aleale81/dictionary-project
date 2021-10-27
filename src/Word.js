/** @format */

import React from "react";
import Definitions from "./Definitions";
import ReactAudioPlayer from "react-audio-player";

export default function Word(props) {
	if (props.data) {
		return (
			<div className="Word mt-4">
				<section>
					<h1>{props.data.word} </h1>
					<p>({props.data.phonetic})</p>
					<ReactAudioPlayer
						src={`https:${props.data.phonetics[0].audio}`}
						controls
					/>
				</section>
				<div className="row">
					<div className="col-8 text-start">
						{props.data.meanings.map(function (meaning, index) {
							return <Definitions key={index} meaning={meaning} />;
						})}
						<section>
							<h2>Origin</h2>
							<p className="origin">{props.data.origin}</p>
						</section>
					</div>
				</div>
			</div>
		);
	} else {
		return null;
	}
}
