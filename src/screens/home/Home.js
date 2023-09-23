import React, { useEffect, useState } from "react";
import "./Home.css";
import SearchBar from './../../components/SearchBar/SearchBar';
import ProductSection from "../../components/ProductsSection/ProductSection";
import { axiosInstance } from '../../components/api/axios';

function Home() {
  const [productList, setProductList] = useState([]);
  const [searchString, setSearchString] = useState('');
  // on did mount
  useEffect(() => {
    getProductsList();
    console.log(getProductsList())
  }, []);

  const handleChange = (e) => {
    let searchString = e.target.value;
    setSearchString(searchString);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
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
        setProductList(res.data.products);
        console.log(res.data.products)
      })
      .catch((err) => console.log(err));
  };


  return (
    <div className="home-wrapper mb-5">
      <SearchBar handleChange={handleChange} handleSearch={handleSearch}></SearchBar>
      <div  className=" container mt-5 d-flex">
        <div className='row row-cols-1 row-cols-md-3  ms-3'>
        <ProductSection list={productList}></ProductSection>
        </div>
        </div>
    </div>
  );
}

export default Home;
