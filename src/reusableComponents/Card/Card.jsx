import "./Card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux";
import ProductDetails from "../../screens/ProductDetails/ProductDetails";


const Card = (props) => {
  const state = useSelector((state) => state);
  // console.log(state);

  return (
    
    <div
      onClick={props.click}
      className={`card overflow-hidden shadow align-items-center mb-3`} style={{
          width: "20rem", height: "22rem",}}>
      <FontAwesomeIcon onClick={(e)=>{props.handleFavouritesToggle(e,props.product)}} icon={props.isFav? faHeart :farHeart}  className="position-absolute top-0 end-0 mt-3 me-3 fa-2x"/>
   <img src={props.pimage} class="card-img-top  rounded-circle mt-2" alt="..."></img>
  <div className="card-body d-flex flex-column align-items-center justify-content-center " >
    <h6 className={`card-title text-light pb-3`}>{props.ptitle}</h6>
    <h6 className={`card-title text-light pb-3`}>{props.pname}</h6>
        <h6 className={`card-title text-light pb-3`}>{props.pcategory}</h6>
  </div>
  
</div>
    
  );
};

export default Card;
