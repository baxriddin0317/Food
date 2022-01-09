import { createContext, useState} from 'react';

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
