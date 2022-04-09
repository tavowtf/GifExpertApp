import { useState } from "react";

import AddCategory from "./Components/AddCategory";
import GifGrid from "./Components/GifGrid";
import ResetSearch from "./Components/ResetSearch";

const GifExpertApp = () => {
  const [categorias, setCategorias] = useState([""]);

  return (
    <>
      <h1>GifExpertApp</h1>
      <div className="search-bar">
        <AddCategory setCategorias={setCategorias} />
        <ResetSearch reset={setCategorias} />
      </div>
      <div className="divider"></div>
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {categorias.map((categoria) => (
          <GifGrid categoria={categoria} key={categoria} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
