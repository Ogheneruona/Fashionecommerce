export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );
  
    if (existingCartItem.quantity === 1) {
      return cartItems.filter(cartItem => 
        cartItem.id !== cartItemToRemove.id)
    }  
  
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.qunatity - 1 }
      : cartItem
    );
};