import React, { useState } from "react";

const defaultValue = {
    navVisible: true,
    changeTheme: (value: boolean) => {}
}

export const SectionContext = React.createContext(defaultValue);

const SectionProvider = ({ children }: { children: React.ReactNode }) => {

    const [navVisible, setNavVisible] = useState<boolean>(false);


    const changeTheme = (value: boolean) => {
        setNavVisible(value);
    };

    return (
        <React.Fragment>
            <SectionContext.Provider value={{ navVisible, changeTheme }}>
                {children}
            </SectionContext.Provider>
        </React.Fragment>
    );
};

export default SectionProvider;