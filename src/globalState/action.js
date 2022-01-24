import * as type from './const';

export const changeSearchKeyword = (payload)=>{
    return {
        type:type.CHANGE_SEARCH_KEYWORD,
        payload
    }
}