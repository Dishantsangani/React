import React, { useState } from "react";

function Chcek() {
  const [error, setError] = useState(null);

  const ImageValidation = (image) => {
    setError(null);
    //Check type
    if (!image.name.match(/\.(jpg|jpeg|png|gif|JPG|MOV)$/)) {
      const error = "Wrong file type";
      setError(error);
      return;
    }
    // Check Image  Size
    if (image.size > 5000000) {
      const error = "file too  large- Upload file less than  5mb";
      setError(error);
      return;
    }
    setError(null);
  };

  return (
    <form>
      <input
        type="file"
        onChange={(event) => {
          validateImage(event.target.files[0]);
        }}
      />

      {error && <p>{error}</p>}
    </form>
  );
}

export default ImageValidation;
