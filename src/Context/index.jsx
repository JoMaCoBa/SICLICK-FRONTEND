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

    // Form Context
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",      
    })

    // Funciones para manejar el formulario
    const handleInputChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

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
            formData,
            setFormData,
            handleInputChange
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}