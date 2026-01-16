import { createContext, useState } from "react";

const MyContext = createContext()

export const ProviderComponent = ({ children }) => {
    const [value, setValue] = useState(1)
    return (
        <MyContext.Provider value={{ value }}>
            {children}
        </MyContext.Provider>
    )
}

export default MyContext;