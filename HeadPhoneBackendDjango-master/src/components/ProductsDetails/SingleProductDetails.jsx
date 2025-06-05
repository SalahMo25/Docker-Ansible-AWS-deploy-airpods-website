import React, { useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';
import productData from './productsData'
import { useGlobalContext } from '../../AppContexts/StoreContext';
import { toast, Bounce } from 'react-toastify';
import specs from  "./specs"
import axios from "axios"; 
import Rating from '@mui/material/Rating';


const SingleProductDetails = () => {
  const apiBase = "http://internal-priv-lb-1390608194.us-east-1.elb.amazonaws.com:8000";

let params = useParams();
const {add} = useGlobalContext() 
let [productDetail , setProduct] = useState(null);
let [rating , setRating] = useState(0);
let [numRating , setNumrating] = useState(0);

async function getProductdetails(id){

  // let {data} = await axios.get(`http://127.0.0.1:8000/discount_product_detail/${id}`)
  let {data} = await axios.get(`http://internal-priv-lb-1390608194.us-east-1.elb.amazonaws.com:8000/discount_product_detail/${id}`)
  
  setProduct(data)
  setRating(data.rating)
  setNumrating(data.all_ratings)

}
 
useEffect(() =>{
  getProductdetails(params.id)
},[])

const updateRating = async (event, newValue)=>{
  
    let data = await axios.post(`http://127.0.0.1:8000/rating`, { product:params.id , value: newValue});
    let currentRating = ((rating * numRating) + newValue ) / (numRating+1);

    if(currentRating > 5 ) {
      currentRating = 5;
    }
    setRating(currentRating)
    setNumrating(numRating+1)
}


// const { id } = useParams();

//   const productId = parseInt(id, 10);

//   const product = productData.find(product => product.id === productId);
  // The find method is used to locate the product in the productData array that matches the converted productId.

  if (!productDetail) {
    // Handle the case where no product is found with the given ID
    return (
      <div>
        <h1 className='text-white text-center m-32'>Product not found</h1>
      </div>
    );
  }
  return (
    <section className='single-product'>
      <h1 className='text-center text-white text-4xl uppercase'>discover the product</h1>

        <div className="underline"></div>
        <div className='grid grid-cols-1 lg:grid-cols-2  text-white'>
          <div>
            <img src={`http://127.0.0.1:8000${productDetail.image}`} alt={productDetail.name} className='single-product-img' data-aos="fade-right" />
          </div>
            <div className='flex flex-col text-center justify-start items-center gap-10 py-20' data-aos="fade-up">
              <h2 className='text-5xl md:text-6xl font-semibold s-product-name'>{productDetail.name}</h2>
              <p className='text-2xl md:text-3xl'>Price: ${productDetail.price}</p>
              <div className='flex flex-col md:flex-row gap-2 md:gap-5 items-center justify-center'>
                  <p className='text-2xl'>{productDetail.rating}</p>
                  {/* <span>{productDetail.stars}</span> */}
                  <span><Rating name="read-only" value={rating} readOnly /></span>
                  
                  <p className='capitalize'>based on <span className='text-lg'>{productDetail.all_ratings}</span> reviews</p>  
              </div>
              <p className='text-3xl capitalize'>{productDetail.desc}</p>
                  <button 
                  onClick={() => {
                          add(productDetail)
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
                  className='s-product-btn capitalize'>add to cart
                  </button>
                  <div className='flex flex-col text-white gap-10 p-5 rounded-sm benefits-box'>
                    <div className='flex flex-row gap-3'>
                        <i class="fa-solid fa-dolly text-5xl benefits-box-icon"></i>
                      <div className='flex flex-col items-start'>
                        <p className='capitalize'>free shipping and returns</p>
                        <p className='capitalize opacity-65'>Enjoy free 2-day delivery and 14-day returns.</p>
                      </div>
                    </div>
                    <div className='flex flex-row gap-3'>
                        <i class="fa-solid fa-store text-5xl benefits-box-icon"></i>
                      <div className='flex flex-col items-start'>
                        <p className='capitalize'>In-Store Pickup</p>
                        <p className='capitalize opacity-65'>Pick up your Beats at our Store near you.</p>
                      </div>
                    </div>
                    <div className='flex flex-row gap-3'>
                        <i className="fa-solid fa-music text-5xl benefits-box-icon"></i>
                      <div className='flex flex-col items-start'>
                        <p className='capitalize'>Free Apple Music Trial</p>
                        <p className='capitalize opacity-65'>Get 6 months of access to over 100 million songs, ad-free.*</p>
                      </div>
                    </div>
                  </div>
            </div>
            </div>
            <div className='flex flex-col gap-10 specs'>
              <h1 className='capitalize text-3xl md:text-4xl text-white text-center'><span className='font-semibold s-product-name'>{productDetail.name}</span> - premium wirless noise cancelation headphones</h1>
              <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-y-20' data-aos="fade-up">
                {specs.map((spec) => {
                  const {id, icon, title} = spec;
                  return (
                    <div key={id} className='flex flex-col text-center text-white specs-info py-6 px-3 justify-center rounded-md'>
                      <span className='text-5xl md:text-6xl mb-4 spec-icon'>{icon}</span>
                      <h4 className='capitalize text-xl md:text-2xl'>{title}</h4>
                    </div>
                  )
                })}
              </div>
            </div>
    </section>
  )
}

export default SingleProductDetails;













