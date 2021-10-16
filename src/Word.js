/** @format */

import React from "react";
import Definitions from "./Definitions";
import ReactAudioPlayer from "react-audio-player";

export default function Word(props) {
	if (props.data) {
		return (
			<div className="Word mt-4">
				<h1 className="myWord text-capitalize fw-bold">{props.data.word} </h1>{" "}
				<p>({props.data.phonetic})</p>
				<ReactAudioPlayer
					src={`https:${props.data.phonetics[0].audio}`}
					controls
				/>
				<div className="row">
					<div className="col-8 ms-5 mt-4 text-start">
						{props.data.meanings.map(function (meaning, index) {
							return <Definitions key={index} meaning={meaning} />;
						})}
						<p className="lh-sm fw-light mt-5 fst-italic">
							{props.data.origin}
						</p>
					</div>
				</div>
			</div>
		);
	} else {
		return null;
	}
}
