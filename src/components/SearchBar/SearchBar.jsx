import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
function SearchBar(props) {
  const favouritesList = useSelector((state) => state.favourites);

    return ( 
        <div className="container  sticky-top">
        <form className="d-flex ">
        <input className="form-control me-2 mt-3" onChange={props.handleChange} type="search" placeholder="Search" aria-label="Search"/>
          <Link to={`/favourites`}>
          <button className="btn btn-outline-primary mt-3" type="submit" onClick={props.handleSearch}>
          <FontAwesomeIcon icon={farHeart}  className=""/>
            {favouritesList.length}
            </button>
            </Link>
      </form>
        </div>
     );
}

export default SearchBar;