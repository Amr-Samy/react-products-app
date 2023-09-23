
function SearchBar(props) {
    return ( 
        <div className="container  sticky-top">
        <form className="d-flex ">
        <input className="form-control me-2 mt-3" onChange={props.handleChange} type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary mt-3" type="submit" onClick={props.handleSearch}>Search</button>
      </form>
        </div>
     );
}

export default SearchBar;