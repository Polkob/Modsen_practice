import React from 'react';

const Photo = ({ photo }) => (
  <div>
    <img src={photo.thumbnailUrl} alt={photo.title} />
    <h3>{photo.title}</h3>
  </div>
);

export default Photo;