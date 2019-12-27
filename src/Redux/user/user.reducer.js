import { userActionTypes } from './user.types';

const INITIAL_STATE = {
    currentUSer: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
       case userActionTypes.SET_CURRENT_USER:
           return {
               ...state,
              hidden: !state.hidden
           };
       default: 
           return state;
    }
};

export default userReducer;