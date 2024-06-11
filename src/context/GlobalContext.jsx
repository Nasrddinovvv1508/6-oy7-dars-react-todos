import { createContext, useReducer, useState } from "react";

export let GlobalContext = createContext();

function GlobalContextProvider({ children }) {

    let changeState = (state, action) => {
        let { type, payload } = action

        switch (type) {
            case `LOG_IN`:
                return { ...state, user: payload }
            case `LOG_OUT`:
                return { ...state, user: null }
            default:
                return state;
        }
    }

    let [state, dispatch] = useReducer(changeState, {
        user: true,
        products: [],
        total: 0,
    })

    let [changeTotal, setChangeTotal] = useState(state.total);

    return (
        <GlobalContext.Provider value={{ ...state, changeTotal, setChangeTotal }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider