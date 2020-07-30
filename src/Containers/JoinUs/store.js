import React, { useState, createContext } from 'react'

//สร้าง Store Context
export const StoreContext = createContext({})

export const StoreContextProvider = ({ children }) => {
    // initail State
    const [profile, setProfile] = useState({
        name: undefined,
        contactNumber: undefined,
        email: undefined,
    })
    const [skills, setSkills] = useState({
        skills: [],
        tools: [],
    })

    const store = {
        profile: [profile, setProfile],
        skills: [skills, setSkills],
    }

    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    )
}
