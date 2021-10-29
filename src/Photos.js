/** @format */

import React from "react";

export default function Photos(props) {
	if (props.photos) {
		return (
			<div className="Photos">
				{props.photos.map(function (photo, index) {
					return (
						<a
							key={index}
							href={photo.src.original}
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={photo.src.tiny}
								alt={`pic from ${photo.photographer}`}
								title={photo.photographer}
								className="mb-3 img-fluid"
							/>
						</a>
					);
				})}
			</div>
		);
	} else {
		return null;
	}
}
