import { createContext, useState} from 'react';

const ModalContext = createContext();

function ModalProvider({children}) {

    const [modal, setModal] = useState(false);

    return (
        <ModalContext.Provider value={{modal, setModal}}>
            {children}
        </ModalContext.Provider>
    )
}

export {ModalContext, ModalProvider}
