import { createContext, useContext, useState } from 'react'

const AppContext = createContext() //hmne appContext nam k variable m context ke function ko initialise kiuyaa taaki hm context use kr sake
// const Store = createContext() //hmne appContext nam k variable m context ke function ko initialise kiuyaa taaki hm context use kr sake
// const Priti = createContext() //hmne appContext nam k variable m context ke function ko initialise kiuyaa taaki hm context use kr sake

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('light') //dark
  const [cartitem, setCartItem] = useState([])
  const [productList, setProductList] = useState([])

  
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const contextValue = {
    theme,
    setTheme,
    cartitem,
    setCartItem,
    showSearch,
    setShowSearch,
    searchQuery,
    setSearchQuery,
    productList,
    setProductList,
  }

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
