import React, { useReducer } from 'react'

export const CountStateContext = React.createContext()
export const CountDispacthContext = React.createContext()

function countReducer(state, action) {
    switch (action.type) {
        case 'increment': {
            return { count: state.count + 1 }
        }
        case 'decrement': {
            return { count: state.count - 1 }
        }
        default: {
            throw new Error(`Unhandle action type: ${action.type}`)
        }
    }
}
//función que proveé un contexto separando el estado del actuador en dos contextos
function CountProvider ({children}) {
    const [state, dispatch] = useReducer(countReducer, {count: 0})

    return(
        <CountStateContext.Provider value={state}>
            <CountDispacthContext.Provider value={dispatch}>
                {children}
            </CountDispacthContext.Provider>
        </CountStateContext.Provider>
    )
}

function useCountState() {
    const context = React.useContext(CountStateContext)
    if(!context) throw new Error(`useCountState must be used within a CountProvider`)
    return context
}

function useCountDispatch() {
    const context = React.useContext(CountDispacthContext)
    if(!context) throw new Error(`useCountDispatch must be used within a CountProvider`)
    return context
}

function useCount() {
    const state = useCountState()
    const dispatch = useCountDispatch()
    return [state, dispatch]
}


// ejemplo para la asincronía
/* async function updateUser(dispatch, user, updates) {
    dispatch({type: 'start update', updates})
    try {
      const updatedUser = await userClient.updateUser(user, updates)
      dispatch({type: 'finish update', updatedUser})
    } catch (error) {
      dispatch({type: 'fail update', error})
    }
  } */

export {CountProvider, useCountDispatch, useCountState, useCount}