import React from 'react';
import ProductsDetails from '../components/ProductsDetails/ProductsDetails';

const Products = () => {
return (
    <section className='products px-5'>
        <h1 className='text-center text-white text-4xl uppercase'>Products</h1>
        <div className="underline"></div>
        <div>
        <ProductsDetails />
        </div>
    </section>
)
}

export default Products
