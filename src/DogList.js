import React from 'react';
import { Link } from 'react-router-dom';

const DogList = ({ dogs }) => {
  return (
    <div>
      <h1>Meet Our Dogs</h1>
      {dogs.map((dog) => (
        <div key={dog.name}>
          <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default DogList;