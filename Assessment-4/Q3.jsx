import React, { useState } from "react";

function Q3() {
  const images = [
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1016/600/400",
    "https://picsum.photos/id/1018/600/400",
    "https://picsum.photos/id/1025/600/400",
    "https://picsum.photos/id/1035/600/400"
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div style={pageStyle}>
      <div style={headerStyle}>
        <p style={{ margin: 0 }}>RAMAKRISHNA</p>
        <p style={{ margin: 0 }}>24BDS0165</p>
      </div>

      <div style={containerStyle}>
        <h1 style={titleStyle}>Interactive Image Gallery</h1>

        <div style={previewBoxStyle}>
          <img
            src={selectedImage}
            alt="Preview"
            style={previewImageStyle}
          />
        </div>

        <div style={thumbnailContainerStyle}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              style={{
                ...thumbnailStyle,
                border:
                  selectedImage === img
                    ? "3px solid #007bff"
                    : "2px solid #ccc"
              }}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  backgroundColor: "#f4f6f8",
  paddingTop: "80px"
};

const headerStyle = {
  position: "fixed",
  top: "10px",
  left: "10px",
  backgroundColor: "#222",
  color: "white",
  padding: "10px 14px",
  borderRadius: "8px",
  fontWeight: "bold",
  zIndex: 1000
};

const containerStyle = {
  width: "80%",
  maxWidth: "900px",
  margin: "0 auto",
  textAlign: "center",
  backgroundColor: "white",
  padding: "30px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
};

const titleStyle = {
  marginBottom: "20px"
};

const previewBoxStyle = {
  marginBottom: "20px"
};

const previewImageStyle = {
  width: "100%",
  maxWidth: "700px",
  height: "400px",
  objectFit: "cover",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  transition: "transform 0.3s ease"
};

const thumbnailContainerStyle = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "15px"
};

const thumbnailStyle = {
  width: "120px",
  height: "80px",
  objectFit: "cover",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "transform 0.3s ease, box-shadow 0.3s ease"
};

export default Q3;