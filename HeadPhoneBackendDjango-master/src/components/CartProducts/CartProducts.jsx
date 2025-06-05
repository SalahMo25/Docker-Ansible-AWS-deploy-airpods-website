import React from 'react';
import { useGlobalContext } from '../../AppContexts/StoreContext';
import { toast, Bounce } from 'react-toastify';

const CartProducts = ({ item }) => {
    const { remove, increase, decrease } = useGlobalContext();

    const handleRemove = (item) => {
        remove(item);
    };
    const handleIncrease = (item) => {
        increase(item);
    };
    const handleDecrease = (item) => {
        decrease(item);
    };

    const itemTotal = item.price * item.amount;

    return (
        <section className="cart-cards">
            {/* Desktop */}
            <div className="md:flex hidden card-product flex-row justify-around items-center p-6 mb-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg shadow-lg transform transition-all hover:scale-105 group">
                <div className="flex flex-col items-center">
                    <img
                        className="w-60 mb-4 rounded-lg transition group-hover:scale-125"
                        src={item.image}
                        alt={item.name}
                    />
                    <div className="text-white text-lg font-semibold">{item.name}</div>
                </div>
                <div className="text-white text-4xl font-bold">${item.price}</div>
                <div className="flex flex-row gap-4 text-3xl items-center">
                    <button
                        className="amount-btn text-white rounded-lg p-2 shadow-md hover:bg-gray-50"
                        onClick={() => handleDecrease(item)}
                    >
                        <i className="fa-regular fa-square-minus"></i>
                    </button>
                    <p className="text-white">{item.amount}</p>
                    <button
                        className="amount-btn text-white rounded-lg p-2 shadow-md hover:bg-gray-50"
                        onClick={() => handleIncrease(item)}
                    >
                        <i className="fa-regular fa-square-plus"></i>
                    </button>
                </div>
                <button
                    className="trash text-white text-2xl"
                    onClick={() => {
                            handleRemove(item)
                            toast.info("Product Removed", {
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
                    } }
                >
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </div>

            {/* Mobile */}
            <div className="md:hidden flex card-product flex-col gap-3 justify-around items-center p-5 mb-6 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-lg shadow-lg transform transition-all hover:scale-105 group">
                <div className="flex flex-col items-center">
                    <img
                        className="w-60 mb-4 rounded-lg transition group-hover:scale-125"
                        src={item.image}
                        alt={item.name}
                    />
                    <div className="text-white text-3xl font-semibold">{item.name}</div>
                </div>
                <div className='flex flex-row items-center gap-32'>
                    <div className="text-white text-3xl font-bold">${item.price}</div>
                    <div className="flex flex-row gap-4 text-3xl items-center">
                        <button
                            className="amount-btn text-white rounded-lg p-2 shadow-md hover:bg-gray-50"
                            onClick={() => handleDecrease(item)}
                        >
                            <i className="fa-regular fa-square-minus"></i>
                        </button>
                        <p className="text-white">{item.amount}</p>
                        <button
                            className="amount-btn text-white rounded-lg p-2 shadow-md hover:bg-gray-50"
                            onClick={() => handleIncrease(item)}
                        >
                            <i className="fa-regular fa-square-plus"></i>
                        </button>
                    </div>
                </div>
                <button
                    className="trash text-white text-2xl"
                    onClick={() => handleRemove(item)}
                >
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </section>
    );
};

export default CartProducts;
