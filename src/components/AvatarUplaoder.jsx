import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const AvatarUploader = ({ onUpload }) => {
  const [preview, setPreview] = useState(null);
  const fileRef = useRef();

  const handleFile = (file) => {
    const isValidType = ['image/jpeg', 'image/png'].includes(file.type);
    const isValidSize = file.size <= 500 * 1024;

    if (!isValidType || !isValidSize) {
      alert('Only JPG/PNG files under 500KB are allowed.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
      onUpload(file);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) handleFile(file);
  };

  return (
    <div
      className="avatar-uploader"
      onClick={() => fileRef.current.click()}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      {preview ? (
        <img src={preview} alt="Avatar Preview" className="avatar-preview" />
      ) : (
        <div className="upload-placeholder">
          <div className="upload-icon mb-4">⬆️</div>
          <p className='uploader-info'>Drag or drop your files here or click to upload</p>
        </div>
      )}
      <input
        type="file"
        ref={fileRef}
        style={{ display: 'none' }}
        accept="image/jpeg, image/png"
        onChange={handleChange}
      />
    </div>
  );
};

AvatarUploader.propTypes = {
  onUpload: PropTypes.func.isRequired,
};

export default AvatarUploader;
