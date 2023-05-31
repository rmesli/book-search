const SearchInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="query"
      className="form-control"
      placeholder="Rechercher..."
      value={value}
      onKeyDown={({ key, currentTarget }) => {
        if (key === "Enter") onChange(currentTarget.value);
      }}
    />
  );
};
export default SearchInput;
