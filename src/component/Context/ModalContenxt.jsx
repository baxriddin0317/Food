import { createContext} from 'react';
import { useState } from 'react/cjs/react.development';

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
