import React, { useState } from "react";

const initialState = {
    lista: [],
}

export const AppContext = React.createContext(initialState)

const Store = props => {
    const [state, setState] = useState(initialState)

    function updateState(key, value) {
        // console.log(key + "===>" + value)
        setState({
            ...state,
            [key]: value
        })
    }

    return (
        <AppContext.Provider value={{
            lista: state.lista,
            setLista: l => updateState('lista', l),
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default Store