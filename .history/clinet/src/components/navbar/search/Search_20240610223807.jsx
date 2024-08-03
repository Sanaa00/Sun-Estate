function Search() {
  return (
    <div className="searchBar">
      <div className="type"></div>
      <form>
        <input type="text" name="location" placeholder="City Location" />

        <input
          type="number"
          name="minPrice"
          min={0}
          max={1000000}
          placeholder="Min Price"
        />

        <input
          type="number"
          name="MaxPrice"
          min={0}
          max={1000000}
          placeholder="Max Price"
        />
      </form>
    </div>
  );
}

export default Search;
