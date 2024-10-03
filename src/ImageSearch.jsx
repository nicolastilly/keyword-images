// src/ImageSearch.jsx
import React, { useState } from 'react';
import { imageData } from './imageData';

const ImageSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [matchingImages, setMatchingImages] = useState([]);

    const handleSearch = (event) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);

        if (term.trim() === '') {
            setMatchingImages([]);
        } else {
            const matches = imageData.filter(image =>
                image.keyword.toLowerCase().includes(term)
            );
            setMatchingImages(matches);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Saisissez un mot-clé"
                value={searchTerm}
                onChange={handleSearch}
            />
            <div className="image-grid">
                {matchingImages.map(image => (
                    <img
                        key={image.id}
                        src={`/images/${image.filename}`}
                        alt={image.keyword}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSearch;