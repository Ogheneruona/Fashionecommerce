import { userActionTypes } from './user.types';

export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    //type tells us what type of action.
    payload: user
    //can be anything.
});