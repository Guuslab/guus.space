import React, { useState, useEffect } from 'react';

function App() {
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  // Haal de afbeeldingen op bij het laden van de component
  useEffect(() => {
    fetch('/api/images')
      .then(response => response.json())
      .then(data => setImages(data));
  }, []);

  // Selecteer willekeurig drie afbeeldingen bij het laden van de component
  useEffect(() => {
    const selected = [];

    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * images.length);
      selected.push(images[randomIndex]);
      images.splice(randomIndex, 1);  // Verwijder de geselecteerde afbeelding uit de array
    }

    setSelectedImages(selected);
  }, [images]);

  // Wanneer een afbeelding wordt geklikt, selecteer een nieuwe willekeurige afbeelding
  const handleClick = (index) => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const newSelectedImages = [...selectedImages];
    newSelectedImages[index] = images[randomIndex];
    setSelectedImages(newSelectedImages);
  };

  return (
    <div className="baground">
      {selectedImages.map((src, index) => (
        <img key={index} src={src} alt="" onClick={() => handleClick(index)} />
      ))}
      <button> dounload </button>
    </div>
  );
}

export default App;