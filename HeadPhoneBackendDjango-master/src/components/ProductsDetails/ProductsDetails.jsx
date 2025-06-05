import React from 'react';
// import products from './productsData';
import {useGlobalContext} from '../../AppContexts/StoreContext';
import { Link } from 'react-router-dom';
import { toast, Bounce } from 'react-toastify';
import Axios from "axios";
import { useEffect, useState } from "react";


const ProductsDetails = () => {
  const apiBase = "http://internal-priv-lb-1390608194.us-east-1.elb.amazonaws.com:8000";

    const {add} = useGlobalContext()
  const [Products, setProducts] = useState([]);

  async function getProducts() {
    // let { data } = await Axios.get(`http://127.0.0.1:8000/all_products`);
    let { data } = await Axios.get(`http://internal-priv-lb-1390608194.us-east-1.elb.amazonaws.com:8000/all_products`);
    console.log(data);
    setProducts(data);
  }

    useEffect(() => {
        getProducts();
    }, []);
    
return (
    <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 '>
        {Products.map((product) => {
            // const {id, image, name, desc, rating, stars, reviews, price} = product;
            return (
                <div className='mt-10 product-details' data-aos="fade-up">
                    <img src={product.image} alt={product.name} 
                    className='product-img'
                    />
                    <div className='text-white flex flex-col text-center items-center gap-4'>
                        <h2 className='text-3xl product-name'>{product.name}</h2>
                        <p className='text-l capitalize'>{product.name}</p>
                        <div className='flex flex-col items-center gap-5 lg:flex-row xl:flex-row'>
                            <p className='text-2xl'>{product.rating}</p>
                            {/* <span>{stars}</span> */}
                            <p className='capitalize'>based on <span className='text-lg'>{product.all_ratings}</span> reviews</p>
                        </div>
                        <p className='text-3xl'>${product.price}</p>
                    </div>
                    <div className="flex flex-col gap-4 p-5 lg:flex-row xl:flex-row ">
                        <Link to={`/products/${product.id}`}>
                        <button className='product-btn-1 capitalize'>more details</button>
                        </Link>
                        <button 
                        onClick={() =>  {
                            add(product)
                            toast.success("Product added to the cart", {
                            position: "top-center",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Bounce,
                            })
                        }}
                        className='product-btn-2 capitalize'>add to cart</button>
                    </div>
                </div>    
            )
        })}
    </div>
)
}

export default ProductsDetails
