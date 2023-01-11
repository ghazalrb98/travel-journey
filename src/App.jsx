import React from "react";
import Destination from "../components/Destination";
import destinationsData from "../data";

export default function App() {
  const destinationElements = destinationsData.map((destination, index) => (
    <Destination key={index} {...destination} />
  ));
  return (
    <div>
      <header>
        <img className="world-icon" src="images/world-icon.svg" />
        <h1 className="semi-bold">My travel journal</h1>
      </header>
      <div className="destinations--container">{destinationElements}</div>
    </div>
  );
}
