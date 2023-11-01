import { useState, createContext, useEffect } from "react";
const CartContext = createContext()

const initialState = {
  items: [],
  total: 0,
  amount: 0
}

function CartProvider({ children }) {
  
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || initialState)

  
  const emptyCart = () => setCart(initialState)

  
  const findProductInCart = (product) => {

    return cart.items.findIndex(item => item._id === product._id)
  }

  
  const addProductToCart = (product) => {
    
    const itemPosition = findProductInCart(product)

  
    if (itemPosition !== -1) {
      cart.items[itemPosition].quantity += 1

    } else { 
      cart.items.push({ ...product, quantity: 1 }) 
      cart.total += 1 
    }

    
    cart.amount += product.precio

    
    setCart({ ...cart })
    console.log(cart)
    
  }

 
  const deleteProductFromCart = (product) => {
    
    const itemPosition = findProductInCart(product)

    
    if (itemPosition !== -1) {
      cart.items.splice(itemPosition, 1)
      cart.total -= 1
      cart.amount -= product.precio


      
      setCart({ ...cart })
    }

  }

  const decreaseProductFromCart = (product) => {
    
    const itemPosition = findProductInCart(product)

    
    if (itemPosition !== -1) {
      if (cart.items[itemPosition].quantity === 1) {
        deleteProductFromCart(product)
      } else {
        cart.items[itemPosition].quantity -= 1
        cart.amount -= product.precio

        
        setCart({ ...cart })
      }
    }

  }

 
  useEffect(() => {
   
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])


  return (
    <CartContext.Provider value={{ cart, emptyCart, addProductToCart, deleteProductFromCart, decreaseProductFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }