import { combineReducers } from './node_modules/redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export dafault combineReducers({  
    user: userReducer,
    cart: cartReducer
});