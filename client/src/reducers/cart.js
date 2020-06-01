import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types';

const initialState = [];

//Cannot mutate array in reducer 

export default function(state = initialState, action){
    const { type, payload } = action;

    
    switch(type){
        case ADD_TO_CART:
            const itemIndex = state.findIndex(item => item.item.uid === payload.item.uid);
            if (itemIndex !== -1) {
                return state.map((item, i) => ({
                    ...item,
                    item: {
                        ...item.item,
                        qty: item.item.qty + (itemIndex === i ? 1 : 0),
                    }
                }));
            } else {
                return [...state, payload];
            }
        case REMOVE_FROM_CART:
                return state.filter(cartItem => cartItem.item.uid !== payload.item.uid);
        default:
            return state;
    }
}