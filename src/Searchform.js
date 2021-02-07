import React from "react";
import "./SearchForm.css";

const SearchForm = (props) => {
  const onSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit();
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        className="search-form"
        type="text"
        placeholder="Enter Search Topic"
        onChange={(event) => props.onSearchValueChange(event.target.value)}
      />
      <div>
        <button disabled={props.isSearching}>Search</button>

        <button
          onClick={props.onSingleSearchClick}
          disabled={props.isSearching}
        >
          I'm Feeling like a Dad
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
