import React from 'react';

const Person = (props) => {
  return (
  <div className="card">
    <picture><img src={props.pictureURL} /></picture>
    <div>voornaam: {props.voornaam}</div>
    <div>achternaam: {props.achternaam}</div>
    <div>leeftijd: {props.leeftijd}</div>
    <div>lengte: {props.lengte}</div>
    <div>gewicth: {props.gewicht}</div>
  </div>
  )
}

export default Person;