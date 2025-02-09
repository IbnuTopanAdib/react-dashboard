import { createContext, useContext, useState } from "react";
import { UserProfile } from "../components";


export const DashboardContext = createContext({
    activeMenu: false,
    setActiveMenu : ()=>{}
});

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const DashboardContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize]= useState(undefined)
    const handleCLick = (clicked) => {
        setIsClicked({
            ...initialState,
            [clicked] : true
        })
    }

    return (
        <DashboardContext.Provider value={
            {
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleCLick,
                setScreenSize,
                screenSize
            }
        }>
            {children}
        </DashboardContext.Provider>
    )
}

export const useDashboardContext = () => useContext(DashboardContext)