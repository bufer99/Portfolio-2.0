import React, { useState } from "react";

const defaultValue = {
    navVisible: true,
    setNavVisible: (value: boolean) => { },
    sectionInViewPort: "",
    changeSectionInViewPort: (value: string) => { },
}

export const SectionContext = React.createContext(defaultValue);

const SectionProvider = ({ children }: { children: React.ReactNode }) => {

    const [navVisible, setNavVisible] = useState<boolean>(false);
    const [sectionInViewPort, setSectionInViewPort] = useState<string>("");

    const changeSectionInViewPort = (value: string) => {
        setSectionInViewPort(value);
    };

    return (
        <React.Fragment>
            <SectionContext.Provider value={{ navVisible, setNavVisible: (value) => setNavVisible(value), sectionInViewPort, changeSectionInViewPort }}>
                {children}
            </SectionContext.Provider>
        </React.Fragment >
    );
};

export default SectionProvider;