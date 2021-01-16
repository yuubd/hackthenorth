import React, { createContext, useReducer } from 'react'
import { reducer, initialState } from './reducer'

export const StatsContext = createContext({
    state: initialState,
    dispatch: () => null
})

export const StatsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <StatsContext.Provider value={[ state, dispatch ]}>
            {children}
        </StatsContext.Provider>
    )
}
