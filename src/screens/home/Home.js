import React, { useEffect, useState } from "react";
import "./Home.css";
import SearchBar from './../../components/SearchBar/SearchBar';
import ProductSection from "../../components/ProductsSection/ProductSection";
import { axiosInstance } from '../../components/api/axios';
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const [productList, setProductList] = useState([]);
  const [searchString, setSearchString] = useState('');
  const favouritesList = useSelector((state) => state.favourites);

  // on did mount
  useEffect(() => {
    getProductsList();
    // TODO set icons after data is back and moded
    // if (productList) {
      // for (let i = 0; i < productList.length; i++) {
      //   if (favouritesList.includes(productList[i])) {
      //     productList[i].isFav = true;
      //   }
      // }
      // setProductList([...productList]);
      // console.log(productList);
    // }
    document.title = 'Home | Products';

  }, []);

  const handleChange = (e) => {
    let searchString = e.target.value;
    setSearchString(searchString);
    handleSearch();
  };

  const handleSearch = async (e) => {
    // e.preventDefault();
    await axiosInstance
     .get(`/products/search?q=${searchString}`)
     .then((res) => {
       setProductList(res.data.products);
      //  console.log("you have searched for: "+res.data.products[0].title)
     })
     .catch((err) => console.log(err));
 };

  const getProductsList = async () => {
     await axiosInstance
      .get("/products")
       .then((res) => {
         let modProductsList = res.data.products.map((product, index) => ({
           ...product,
           isFav: false,
         }));
         for (let i = 0; i < productList.length; i++) {
          if (favouritesList.includes(productList[i])) {
            productList[i].isFav = true;
          }
        }
        setProductList(modProductsList);
        // console.log(modProductsList)
      })
      .catch((err) => console.log(err));
  };

  const handleFavouritesToggle = (e, product) => {
    console.log(product);
    ///action => {type:'',payload :{name:ahmed, age:20}}
    if (product.isFav) {
      // to update products list
      let tempObj = productList.find((obj) => obj.id === product.id);
      tempObj.isFav = false;
      setProductList([...productList]);
      dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: product });
    } else {
      // to update products list
      let tempObj = productList.find((obj) => obj.id === product.id);
      tempObj.isFav = true;
      setProductList([...productList]);
      // to update store with rigt product object with isFav true
      product.isFav = true;
      dispatch({ type: "ADD_TO_FAVOURITES", payload: product });
    }
  };


  return (
    <div className="home-wrapper mb-5">
      <SearchBar handleChange={handleChange} handleSearch={handleSearch}></SearchBar>
      <div  className=" container mt-5 d-flex">
        <div className='row row-cols-1 row-cols-md-3  ms-3'>
        <ProductSection list={productList} handleFavouritesToggle={handleFavouritesToggle}></ProductSection>
        </div>
        </div>
    </div>
  );
}

export default Home;
