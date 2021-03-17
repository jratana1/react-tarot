const initialState = {
    counter: 44
}

const readingsReducer = (state= initialState, action) => {
    switch(action.type){
        case "INCREMENT": 
        return {counter: state.counter += 1}
    
        default:
            return {...state}
    }
}

export default readingsReducer
