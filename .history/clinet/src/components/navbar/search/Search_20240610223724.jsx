function Search() {
  return (
    <div className="searchBar">
      <div className="type"></div>
      <form>
        <input type="text" name="location" placeholder="City Location" />

        <input type="number" name="minPrice"
          min={ } placeholder="Min Price" />

        <input type="number" name="MaxPrice" placeholder="Max Price" />
      </form>
    </div>
  );
}

export default Search;
