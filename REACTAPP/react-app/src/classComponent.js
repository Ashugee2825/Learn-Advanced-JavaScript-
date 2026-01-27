import React, { Component } from "react";
import "./ClassComponent.css";

export default class ClassComponent extends React.Component {
  render() {
    const greeting = "Good Morning";
    const names = ["John", "Peter", "Hary"];
    const nameAge = [
      {
        name: "John",
        age: 29,
      },
      {
        name: "Peter",
        age: 30,
      },
      {
        name: "Hary",
        age: 31,
      },
    ];

    return (
      <div className="container">
        <h1> Class Component</h1>
        <p>{greeting}</p>
        <div>
          {names.map((name) => (
            <p>{name}</p>
          ))}
        </div>
        <ul>
          {nameAge.map((nameAge) => (
            <li>
              {nameAge.name}
              {nameAge.age}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
