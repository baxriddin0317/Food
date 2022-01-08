import { createContext} from 'react';
import { useState } from 'react/cjs/react.development';

const Context = createContext();

function Provider({children}) {

    const [orders, setOrders] = useState([]);

    return (
        <Context.Provider value={{orders, setOrders}}>
            {children}
        </Context.Provider>
    )
}

export {Context, Provider}
