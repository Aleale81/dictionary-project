/** @format */

import React from "react";

export default function Photos(props) {
	if (props.photos) {
		return (
			<div className="Photos">
				{props.photos.map(function (photo, index) {
					return (
						<a
							href={photo.src.original}
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={photo.src.tiny}
								alt={photo.photographer}
								key={index}
								className="img-fluid mb-4"
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
