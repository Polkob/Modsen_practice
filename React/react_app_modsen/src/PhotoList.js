import React from 'react';
import Photo from './Photo';

const PhotoList = ({ photos }) => (
  <div>
    <h2>PhotoList</h2>
    {photos.map((photo) => (
      <Photo key={photo.id} photo={photo} />
    ))}
  </div>
);

export default PhotoList;