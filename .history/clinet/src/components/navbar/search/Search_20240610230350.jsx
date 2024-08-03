import { useState } from 'react';

function Search() {
  const types = ['buy', 'rent'];
  const [query, setQuery] = useState({
    type: 'buy',
    location: '',
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = () => {};
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((index, type) => {
          return (
            <button key={index} onClick={() => switchType(type)}>
              {type}
            </button>
          );
        })}
        {/* <button>Buy</button>
        <button>Rent</button> */}
      </div>
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
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default Search;
