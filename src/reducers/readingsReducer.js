const initialState = {
    counter: 0,
    readings: []
}

const readingsReducer = (state= initialState, action) => {
    console.log(action.type)
    debugger
    switch(action.type){
        case "INCREMENT": 
        return {...state, counter: state.counter += 1}
        
        case "ADD_READING":
        return {...state, readings: [...state.readings, {question: action.payload}]}

        default:
            return {...state}
    }
}

export default readingsReducer

