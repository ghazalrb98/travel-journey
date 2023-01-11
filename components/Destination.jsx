import React from "react";

export default function Destination(props) {
  return (
    <div className="destination--card">
      <img className="destination--img" src={props.imageUrl} />
      <div className="destination--details">
        <div className="destination--details-header">
          <img className="location-icon" src="images/location-icon.svg" />
          <span className="uppercase destination--location">
            {props.location}
          </span>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h4 className="destination--title">{props.title}</h4>
        <p className="destination--travel-date semi-bold">
          {props.startDate} - {props.endDate}
        </p>
        <p className="destination--description">{props.description}</p>
      </div>
    </div>
  );
}
