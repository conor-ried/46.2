import React from 'react';
import { useParams } from 'react-router-dom';

const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const dog = dogs.find((dog) => dog.name.toLowerCase() === name.toLowerCase());

  if (!dog) {
    return <div>Dog not found!</div>;
  }

  const { age, src, facts } = dog;

  return (
    <div>
      <h1>{name}</h1>
      <img src={src} alt={name} />
      <h2>Age: {age}</h2>
      <h3>Facts:</h3>
      <ul>
        {facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default DogDetails;