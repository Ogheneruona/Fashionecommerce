export const setCurrentUser = User => ({
    type: 'SET_CURRENT_USER',
    //we use capital and underscores in other for the strings to never change.
    payload: user
});