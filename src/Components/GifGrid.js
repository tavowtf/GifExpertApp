import { useState, useEffect } from "react";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ categoria }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGif(categoria);
  }, [categoria]);
  const getGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
      categoria
    )}&limit=20&api_key=zI0RUJkl2mvMTJMUYd7SPiVvQdA0340z`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.original.url
      };
    });

    console.log(gifs);
    setImages(gifs);
  };

  return (
    <>
      <h3>{categoria}</h3>
      <div className="card-grid">
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};

export default GifGrid;
