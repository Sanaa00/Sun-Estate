import './filter.scss';
function Filter() {
  return (
    <div className="filter">
      <h1>
        Search results for <b>London</b>
      </h1>
      <div className="item">
        <label className="city">Location</label>
        <input type="text" id="city" name="city" placeholder="City Location" />
      </div>
      <div className="bottom">
        {' '}
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
          {/* <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
          /> */}
        </div>{' '}
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
          {/* <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
          /> */}
        </div>{' '}
        <div className="item">
          <label className="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
          />
        </div>{' '}
        <div className="item">
          <label className="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
          />
        </div>{' '}
        <div className="item">
          <label className="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
          />
        </div>
        <button>search</button>
      </div>
    </div>
  );
}

export default Filter;
