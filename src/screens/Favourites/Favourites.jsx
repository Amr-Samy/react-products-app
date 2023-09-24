import React from "react";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import Loader from "./../../reusableComponents/Loader/Loader";
import Card from "./../../reusableComponents/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import  { useState } from "react";


function Favourites() {
//   const [productList, setProductList] = useState([]);
    const dispatch = useDispatch();
    const favouritesList = useSelector((state) => state.favourites);
    console.log(favouritesList);
    

    const handleFavouritesRemove = (e, product) => {
        console.log(product);
        if (product.isFav) {
          // to update products list
          let tempObj = favouritesList.find((obj) => obj.id === product.id);
          tempObj.isFav = false;
        //   setProductList([...favouritesList]);
          dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: product });
        } 
      };



  return (
    <>
      <div className=" container mt-5 d-flex">
        <div className="row row-cols-1 row-cols-md-3  ms-3">
          {favouritesList.length ? (
            favouritesList.map((product, index) => (
              <div>
                <Card
                  ptitle={product.title}
                  pname={product.brand}
                  pcategory={product.category}
                  pimage={product.thumbnail}
                        handleFavouritesToggle={
                            // Todo remove from fav
                            handleFavouritesRemove
                  }
                  isFav={product.isFav}
                  product={product}
                ></Card>
              </div>
            ))
          ) : (
            <h1>Noting Here to Show</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default Favourites;
