import React, { useReducer } from 'react'
import Context from './Context';
import reducer,{initState} from './reducer';
/**
* @author
* @function ProviderContext
**/

const ProviderContext = ({children}) => {
    const [state,dispatch] = useReducer(reducer, initState)
  return(
    <Context.Provider value={[state,dispatch]}>
        {children}
    </Context.Provider>
   )
  }

  export default ProviderContext