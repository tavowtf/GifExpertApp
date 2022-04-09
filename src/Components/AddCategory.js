import { useState } from "react";

const AddCategory = ({ setCategorias }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.length === 0) {
      console.log("campos obligatorios");
    } else {
      setCategorias((categ) => [inputValue, ...categ]);
      setInputValue("");
    }
  };

  return (
    <form className="border-b" onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <input type="submit" />
    </form>
  );
};

export default AddCategory;
