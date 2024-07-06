import React, { useState } from "react";

interface UserCheck {
    errorActive:boolean;
    setErrorActive:(value:boolean)=>void;
}

export const ErrorContext = React.createContext<UserCheck>(
    {
        errorActive:false,
        setErrorActive:(value:boolean)=>{}
    }
);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [active, setActive] = useState(false);

    return (
        <ErrorContext.Provider value={{ errorActive:active, setErrorActive:setActive }}>
            {children}
        </ErrorContext.Provider>
    );
}
