import React from 'react';

const Search = ({ searchBar, searchTerm, setSearchTerm, renderResults }) => {
  return (
    <div>
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">
          {searchBar}
        </span>
        <input
          type="text"
          className="form-control"
          placeholder={`${searchBar}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="container-fluid">{renderResults}</div>
    </div>
  );
};

export default Search;
