import {useReducer} from 'react';

const initialState = [];

const reducer = (state, action) =>{

    switch(action.type){
        case 'ADD': 
            return [...state, action.item];
        case 'CHECK': 
            return state.map(item =>{
                if(item.id === action.id){
                    return {...item,check: !item.check}
                }else{
                    return item;
                }
            });
        case 'REMOVE': 
            return state.filter(item =>{
                return item.id != action.id;
            });
        default :
            return state;
    }
}

export default() => {

    const [state, dispatch] = useReducer(reducer,
        initialState);

    const additem = (inputItem) =>{
        dispatch({
            type:"ADD",
            item:{
                id:Date.now(),
                title:inputItem,
                check:false,
            }
        });
    }

    const checkitem = (id) =>{
        dispatch({
            type:"CHECK",
            id:id,
        });
    }

    const removeitem = (id) =>{
        dispatch({
            type:"REMOVE",
            id:id,
        });
    }

    return [state, additem, checkitem, removeitem];
}