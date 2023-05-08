import React from "react";

export default function Search() {
  return (
    <div>
      <div className="carousel m-5" style={{ zIndex: "10" }} id='search'>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success text-white bg-success "
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
