import React from "react";

const Filters = ({searchTerm, setSearchTerm}) => {

  return (
    <section className="filters-section">
      <div className="filters-header">
        <div>
        </div>
        <button type="button" className="filters-reset">
          Reset filters
        </button>
      </div>

      <div className="filters-grid">
        <div className="filter-item">
          <label htmlFor="search">Search</label>
          <input
            id="search"
            className="filters-input"
            type="text"
            value={searchTerm}
            onChange={(event)=>setSearchTerm(event.target.value)}
            placeholder="Search by name or email"
          />
        </div>

        <div className="filter-item">
          <label htmlFor="sortBy">Sort by</label>
          <select id="sortBy" className="filters-select">
            <option value="latest">Newest first</option>
            <option value="oldest">Oldest first</option>
            <option value="name-asc">Name A → Z</option>
            <option value="name-desc">Name Z → A</option>
          </select>
        </div>

        <div className="filter-item">
          <label htmlFor="status">Status</label>
          <select id="status" className="filters-select">
            <option value="all">All users</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <div className="filter-item">
          <label htmlFor="joined">Joined after</label>
          <input id="joined" className="filters-input" type="date" />
        </div>
      </div>
    </section>
  );
};

export default Filters;
