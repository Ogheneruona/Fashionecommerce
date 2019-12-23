import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

export dafault combineReducers({  
    user: userReducer
})