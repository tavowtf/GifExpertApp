const ResetSearch = ({ reset }) => {
  const handleReset = () => {
    reset([""]);
  };

  return <button onClick={handleReset}>Limpiar Busqueda</button>;
};

export default ResetSearch;
