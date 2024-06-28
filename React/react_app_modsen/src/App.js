import React from 'react';
import Counter from './Counter';
import PhotoList from './PhotoList';
import FormComponent from './FormComponent';

const App = () => {
  const photos = [
    {
      "albumId": 1,
      "id": 1,
      "title": "green",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
      "albumId": 1,
      "id": 2,
      "title": "purple",
      "url": "https://via.placeholder.com/600/771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    }
  ];

  return (
    <div>
      <PhotoList photos={photos} />
      <Counter />
      <FormComponent />
    </div>
  );
};

export default App;