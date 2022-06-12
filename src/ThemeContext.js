import React from "react"
import { createContext, useState } from "react"

const themeContext = createContext()

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState()

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    const value = {
        theme,
        toggleTheme
    }
    return (
        <themeContext.Provider value={value}>
            {children}
        </themeContext.Provider>

    )

}

export { themeContext, ThemeProvider }