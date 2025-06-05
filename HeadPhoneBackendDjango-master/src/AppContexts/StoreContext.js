import React, { createContext, useReducer, useContext, useEffect } from "react";
import reducer, { initialState } from './reducer';

const StoreContext = createContext();

const AppProvider = ({ children }) => {
const [state, dispatch] = useReducer(reducer, initialState);

const add = (product) => {
    const existingProduct = state.products.find((currentProduct) => currentProduct.id === product.id);

    let updatedCart;
    if (existingProduct) {
    updatedCart = state.products.map((currentProduct) => {
        if (currentProduct.id === product.id) {
        return { ...currentProduct, amount: currentProduct.amount + 1 };
        }
        return currentProduct;
    });
    } else {
    updatedCart = [...state.products, { ...product, amount: 1 }];
    }

    getTotal(updatedCart);
    dispatch({ 
        type: "add",
        payload: updatedCart 
    });
};

const remove = (product) => {
    const updatedCart = state.products.filter((currentProduct) => currentProduct.id !== product.id);

    getTotal(updatedCart);
    dispatch({
        type: "remove", 
        payload: updatedCart 
    });
};

const clearCart = () => {
    const products = [];
    const amount = 0;
    dispatch({ type: "clearCart", 
        payload: products 
    });
    dispatch({ type: "amount", 
        payload: amount 
    });
    localStorage.removeItem('cart');
    localStorage.removeItem('total');
};

const increase = (product) => {
    const tempCart = state.products.map((currentProduct) => {
    if (currentProduct.id === product.id) {
        return { ...currentProduct, amount: currentProduct.amount + 1 };
    }
    return currentProduct;
    });

    getTotal(tempCart);
    dispatch({ type: "increase", payload: tempCart });
};

const decrease = (product) => {
    const tempCart = state.products.map((currentProduct) => {
    if (currentProduct.id === product.id) {
        return { ...currentProduct, amount: currentProduct.amount - 1 };
    }
    return currentProduct;
    }).filter((currentProduct) => currentProduct.amount !== 0);

    getTotal(tempCart);
    dispatch({ type: "decrease", payload: tempCart });
};

const getTotal = (products) => {
    let total = 0;
    let amount = 0;
    products.forEach(product => {
    total += product.price * product.amount;
    amount += product.amount;
    });

    localStorage.setItem('total', total.toString());
    localStorage.setItem('cart', JSON.stringify(products));

    dispatch({ type: "total", payload: total });
    dispatch({ type: "amount", payload: amount });

    return { total, amount };
};

useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('cart')) || [];
    const storedTotal = parseFloat(localStorage.getItem('total')) || 0;
    dispatch({ type: 'add', payload: storedProducts });
    dispatch({ type: 'total', payload: storedTotal });
    const { amount } = getTotal(storedProducts);
    dispatch({ type: 'amount', payload: amount });
}, []);

return (
    <StoreContext.Provider
    value={{
        total: state.total,
        products: state.products,
        amount: state.amount,
        add,
        remove,
        clearCart,
        increase,
        decrease,
    }}
    >
    {children}
    </StoreContext.Provider>
);
};

export const useGlobalContext = () => {
return useContext(StoreContext);
}

export { StoreContext, AppProvider };
