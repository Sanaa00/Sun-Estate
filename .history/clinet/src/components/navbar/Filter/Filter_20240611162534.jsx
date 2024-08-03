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
    </div>
  );
}

export default Filter;
