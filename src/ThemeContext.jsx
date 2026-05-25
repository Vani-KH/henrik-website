import { createContext, useContext } from 'react'

export const ThemeContext = createContext(false) // false = light, true = dark
export const useTheme = () => useContext(ThemeContext)
