import "./Card.css";

const Card = (props) => {
  return (
    
      <div onClick={props.click} className={`card overflow-hidden shadow align-items-center mb-3`} style={{
          width: "20rem", height: "22rem",
      }}>
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
