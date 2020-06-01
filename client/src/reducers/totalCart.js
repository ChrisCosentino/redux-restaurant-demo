import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types';

const initialState = {
    total: 0.0
};

//Cannot mutate array in reducer 

export default function(state = initialState, action){
    const { type, payload } = action;

    switch(type){
        
        case ADD_TO_CART:
            return { total: state.total + payload.item.price }
        case REMOVE_FROM_CART:
            const t = payload.item.qty * payload.item.price;
            return { total: state.total - t}
        default:
            return state;
    }
}