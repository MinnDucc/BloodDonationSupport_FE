import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";

const bannerImages = [
  "/banner/banner1.jpg",
  "/banner/banner2.jpg",
];

export default function AutoBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container maxWidth="100%" sx={{ padding: 0 }}>
      <img
        src={bannerImages[currentIndex]}
        alt={`Banner ${currentIndex + 1}`}
        style={{
          width: "100%",
          height: 400,
          objectFit: "contain",
          display: "block",
        }}
      />
    </Container>
  );
}
