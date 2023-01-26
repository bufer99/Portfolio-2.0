import React, { useState } from "react";

const defaultValue = {
    navVisible: true,
    setNavVisible: (value: boolean) => { },
    sectionInViewPort: 0,
    changeSectionInViewPort: (value: number) => { },
}

export const SectionContext = React.createContext(defaultValue);

const SectionProvider = ({ children }: { children: React.ReactNode }) => {

    const [navVisible, setNavVisible] = useState<boolean>(false);
    const [sectionInViewPort, setSectionInViewPort] = useState<number>(0);

    const changeSectionInViewPort = (value: number) => {
        setSectionInViewPort(value);
        console.log(value)
    };

    return (
        <React.Fragment>
            <SectionContext.Provider value={
                {
                    navVisible,
                    setNavVisible: (value) => setNavVisible(value),
                    sectionInViewPort,
                    changeSectionInViewPort,
                }
            }>
                {children}
            </SectionContext.Provider>
        </React.Fragment >
    );
};

export default SectionProvider;