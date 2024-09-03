import React from 'react';

function ImageComponent({ src, isThumbnail }) {
  return (
    <div
      style={{
        width: isThumbnail ? '100%' : '100%',
        height: isThumbnail ? '80px' : 'auto',  // Adjust height for thumbnail
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: isThumbnail ? '1px solid #ccc' : 'none',
        overflow: 'hidden',
        borderRadius: isThumbnail ? '5px' : '12px',
        boxShadow: isThumbnail ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <img
        src={src}
        alt="Slide Content"
        style={{
          width: isThumbnail ? '100%' : 'auto',
          height: isThumbnail ? '100%' : 'auto',
          objectFit: 'cover',
        }}
      />
    </div>
  );
}

export default ImageComponent;
