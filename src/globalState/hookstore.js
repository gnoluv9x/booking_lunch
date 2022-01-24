import Context from './Context';
import {useContext, useReducer} from 'react';

export const useStore = ()=>{
    return useContext(Context)
}