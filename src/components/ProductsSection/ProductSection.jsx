import Card from './../../reusableComponents/Card/Card';
import {Link, useNavigate } from "react-router-dom";
import './ProductsSection.css'
import Loader from './../../reusableComponents/Loader/Loader';

function ProductSection({ list }) {
    // const navigate = () =>{ 
    //     useNavigate(); //routing hook
    //   }

    return ( 
        list.length ? (
            list.map((product, index) => (
        <Link to={`/productDetails/${product.id}`} style={{ textDecoration: 'none' }}>
            <div>
                    {/* {user.firstName}</Link> */}
                <Card
                     ptitle={product.title}
                     pname={product.brand}
                     pcategory={product.category}
                     pimage={product.thumbnail}
                    //  click={navigate(`/productDetails/${product.id}`)}
                >         
                </Card>
                
                    </div>
                    
        </Link>
            ))
              
          ) : (
            <Loader></Loader>
        )
     );
}

export default ProductSection;