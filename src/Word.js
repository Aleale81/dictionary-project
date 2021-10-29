/** @format */

import React from "react";
import Definitions from "./Definitions";
import ReactAudioPlayer from "react-audio-player";
import Photos from "./Photos";

export default function Word(props) {
	if (props.data) {
		return (
			<div className="Word">
				<div className="row mt-3">
					<div className="col-md-8 text-start">
						<section className="audioplayer text-center m-lg-3 mb-3">
							<h1>{props.data.word} </h1>
							<p>({props.data.phonetic})</p>
							<ReactAudioPlayer
								src={`https:${props.data.phonetics[0].audio}`}
								controls
								className="p-2 m-0"
							/>
						</section>
						{props.data.meanings.map(function (meaning, index) {
							return <Definitions key={index} meaning={meaning} />;
						})}
						<section className="m-lg-3 mb-3">
							<h2>origin</h2>
							<p className="origin">{props.data.origin}</p>
						</section>
					</div>
					<div className="col-md-4 ">
						<section className="m-lg-3">
							<Photos photos={props.photos} />
						</section>
					</div>
				</div>
			</div>
		);
	} else {
		return null;
	}
}
