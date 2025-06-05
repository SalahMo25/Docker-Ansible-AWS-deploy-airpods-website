export const initialState = {
    total: parseFloat(localStorage.getItem('total')) || 0,
    products: JSON.parse(localStorage.getItem('cart')) || [],
    amount: 0,
}

const reducer = (state, action) => {
    switch(action.type) {
        case "add": {
            const updatedCart = action.payload; 
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return {
                ...state,
                products: updatedCart
            }
        }

        case "remove": {
            const updatedCart = action.payload; 
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return {
                ...state,
                products: updatedCart
            }
        }

        case "total": {
            const total = action.payload; 
            localStorage.setItem('total', total); 
            return {
                ...state,
                total: total,
            }
        }

        case "clearCart": {
            const updatedCart = action.payload; 
            localStorage.removeItem('cart');
            localStorage.removeItem('total'); 
            return {
                ...state,
                products: updatedCart,
                total: 0, 
            }
        }

        case "removeItem": {
            const updatedCart = action.payload; 
            localStorage.setItem('cart', JSON.stringify(updatedCart)); 
            return {
                ...state,
                products: updatedCart
            }
        }

        case "increase": {
            const updatedCart = action.payload; 
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return {
                ...state,
                products: updatedCart
            }
        }

        case "decrease": {
            const updatedCart = action.payload; 
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return {
                ...state,
                products: updatedCart
            }
        }

        case "amount": {
            const amount = action.payload; 
            return {
                ...state,
                amount: amount,
            }
        }

        default: throw Error("Cannot Add to the total")
    }
}

export default reducer;
