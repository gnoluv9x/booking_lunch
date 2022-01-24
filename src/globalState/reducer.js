import * as type from './const';

const initState = {
    filter:{
        q:''
    }
}

function reducer(state,action){
    switch(action.type){
        case type.CHANGE_SEARCH_KEYWORD:{
            return{
                ...state,
                filter:{
                    ...state.filter,
                    q:action.payload
                }
            }
        }
        default: return state
    }
}


export {initState}
export default reducer