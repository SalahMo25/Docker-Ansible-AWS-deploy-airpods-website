import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import CartProducts from '../components/CartProducts/CartProducts';
import { useGlobalContext } from '../AppContexts/StoreContext';
import { toast, Bounce } from 'react-toastify';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

const Cart = () => {
    const { products, total, clearCart } = useGlobalContext();
    const [checkoutInitiated, setCheckoutInitiated] = useState(false);
    const [open, setOpen] = useState(false);

    if (products.length === 0) {
        return (
            <section className='empty flex flex-col gap-7 items-center'>
                <h2 className='text-center text-white text-4xl uppercase'>Your Cart is Empty</h2>
                <Link className='home-btn text-xl p-5' to='/products'>Explore products</Link>
            </section>
        );
    }

    const handleCheckout = () => {
        setCheckoutInitiated(true);
        setOpen(true);
    };

    const handleConfirm = () => {
        clearCart();
        setOpen(false);
        setCheckoutInitiated(false);
    };

    const handleClose = () => {
        setOpen(false);
        setCheckoutInitiated(false);
    };

    function handleRemoveWithToast(item) {
    clearCart()
    toast.info("Cart Cleared", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
}

    return (
        <section className='cart items-center px-4'>
            <h1 className='text-center text-white text-4xl uppercase'>Your Cart</h1>
            <div className="underline"></div>
            <div className='py-5'>
                {checkoutInitiated && (
                    <Dialog open={open} handler={handleClose} className='p-3 bg-gray-800'>
                        <DialogHeader className='text-white font-bold'>Checkout Confirmed</DialogHeader>
                        <DialogBody className='text-white font-bold text'>
                            Thank you for buying from us.
                        </DialogBody>
                        <DialogFooter>
                            <Button
                                variant="text"
                                color="white"
                                className="mr-1"
                                onClick={handleClose}
                            >
                                Cancel
                            </Button>
                            <Button variant="gradient" color="gray" onClick={handleConfirm}>
                                <span>Confirm</span>
                            </Button>
                        </DialogFooter>
                    </Dialog>
                )}
            </div>
            <div className='grid m-6 gap-6 xl:grid-cols-3'>
                <div className='col-span-1 xl:col-span-2 px-2'>
                    <div className="cartDetails">
                        {products.map((product, id) => 
                            <CartProducts
                                key={id}
                                item={product}
                            />
                        )}
                    </div>
                    <div className='flex justify-center py-7'>
                        <button
                            className='clear-btn text-lg'
                            onClick={() => handleRemoveWithToast()}
                        >
                            Clear Cart
                        </button>
                    </div>
                </div>

                {/* Cart Box */}
                <div className='total-box p-5 flex flex-col order-first xl:order-none mb-10'>
                    <h2 className='text-center text-white text-xl capitalize py-2'>order summary</h2>
                    <div className='text-white flex flex-col gap-4 capitalize'>
                        <div className='flex flex-row'>
                            <h4 className='mr-auto'>subtotal</h4>
                            <span>${total}</span>
                        </div>
                        <div className='flex flex-row'>
                            <h4 className='mr-auto'>shipping</h4>
                            <p>free</p>
                        </div>
                        <div className='flex flex-row items-center gap-5'>
                            <h4 className='mr-auto'>Address</h4>
                            <input
                                className='px-2 w-72 py-2 rounded-md text-black'
                                type='text'
                                placeholder='253 st, Maadi'
                            />
                        </div>
                        <div className='flex flex-row items-center gap-5'>
                            <h4 className='mr-auto'>Phone Number</h4>
                            <input
                                className='px-2 w-72 py-2 rounded-md text-black'
                                type='tel'
                                placeholder='01xxxxxxxxxx'
                            />
                        </div>
                        <div className='flex flex-row items-center gap-5'>
                            <h4 className='mr-auto'>add coupon code</h4>
                            <input
                                className='px-2 w-72 py-2 rounded-md text-black'
                                type='text'
                                placeholder='Coupon'
                            /> 
                        </div>
                        <div className="underline-cart"></div>
                        <div className='flex flex-row text-xl font-semibold py-4'>
                            <h2 className='mr-auto'>Total</h2>
                            <span>${total}</span>
                        </div>
                            <div className='flex flex-col justify-center items-center p-2'>
                                <button
                                    className='text-white bg-black w-48 uppercase py-3 rounded-md cart-check font-semibold'
                                    onClick={handleCheckout}
                                >
                                    checkout
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
