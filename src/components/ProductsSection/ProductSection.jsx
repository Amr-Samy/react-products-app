import Card from './../../reusableComponents/Card/Card';
import {Link, useNavigate } from "react-router-dom";
import './ProductsSection.css'
import Loader from './../../reusableComponents/Loader/Loader';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function ProductSection({ list,handleFavouritesToggle }) {
    // const navigate = () =>{ 
    //     useNavigate(); //routing hook
    //   }

    return ( 
        list.length ? (
            list.map((product, index) => (
        // <Link to={`/productDetails/${product.id}`} style={{ textDecoration: 'none' }}>
            <div>
                    {/* {user.firstName}</Link> */}
                <Card
                    ptitle={product.title}
                    pname={product.brand}
                    pcategory={product.category}
                    pimage={product.thumbnail}
                    handleFavouritesToggle={handleFavouritesToggle}
                        isFav={product.isFav}
                        product={product}
                        icon={product.isFav? faHeart :farHeart}
                    //  click={navigate(`/productDetails/${product.id}`)}
                >         
                </Card>
                
                    </div>
                    
        // </Link>
            ))
              
          ) : (
            <Loader></Loader>
        )
     );
}

export default ProductSection;