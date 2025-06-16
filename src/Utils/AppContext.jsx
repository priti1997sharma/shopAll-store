import { createContext, useContext, useState } from 'react'

const AppContext = createContext() //hmne appContext nam k variable m context ke function ko initialise kiuyaa taaki hm context use kr sake
// const Store = createContext() //hmne appContext nam k variable m context ke function ko initialise kiuyaa taaki hm context use kr sake
// const Priti = createContext() //hmne appContext nam k variable m context ke function ko initialise kiuyaa taaki hm context use kr sake

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('light') //dark
  const [cartitem, setCartItem] = useState([])

  const contextValue = {
    theme,
    setTheme,
    cartitem,
    setCartItem,
  }

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
