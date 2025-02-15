import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {

    // Shopping Cart - Count
    const [count, setCount] = useState(0)

    // Product Detail - Open and Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Checkout Side Menu - Open and Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // Product Detail - Show information
    const [productToShow, setProductToShow] = useState({})

    // ShoppingCart - Product List
    const [productList, setProductList] = useState([])

    return (
        <ShoppingCartContext.Provider value={{
            count, 
            setCount, 
            openProductDetail, 
            closeProductDetail, 
            isProductDetailOpen, 
            productToShow, 
            setProductToShow, 
            productList, 
            setProductList,
            isCheckoutSideMenuOpen,
            setIsCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}