import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from '../../components/api/axios';
import { Link ,useNavigate } from "react-router-dom";
import './ProductDetails.css'
import Loader from './../../reusableComponents/Loader/Loader';



function ProductDetails() {
  const { id } = useParams();
  const [productDetails, setproductDetails] = useState(undefined);

  useEffect(() => {
    getProductDetails();
    document.title = `${productDetails ? productDetails?.title : "product detais"}`;
  }, [productDetails]);

  let navigate = useNavigate(); 
  const goHome = () =>{ 
    let path = `/home`; 
    navigate(path);
  }

  const getProductDetails = () => {
    axiosInstance
      .get(`/products/${id}`)
     .then((res) => {
       setproductDetails(res.data);
       console.log(res.data);
     })
     .catch((err) => err);
  };

  return (
    <div className="container ">
      {productDetails ? (
        <>
          <button type="button" class="btn btn-dark border-info mt-2" onClick={goHome}>Go Home</button>
          {/* <h2 className="">
        <Link to={`/`} style={{ textDecoration: 'none' }} className="border-bottom">Home</Link>
      </h2> */}

      <h1>{productDetails?.title}</h1>
      <img src={productDetails.thumbnail} alt="thumbnail"></img><br/>
      <img src={productDetails.images[0]} alt="thumbnail" className="rounded thumbnail"></img>
      <img src={productDetails.images[1]} alt="thumbnail" className="rounded thumbnail"></img>
      <img src={productDetails.images[2]} alt="thumbnail" className="rounded thumbnail"></img>

      <p> description: {productDetails && productDetails.description}</p> 
          <p>Raitng :  {productDetails.rating}</p>
          <p>Category : {productDetails.category}</p>
        </>
      ) : (
        <Loader></Loader>
      )}
    </div>
  );
}

export default ProductDetails;
