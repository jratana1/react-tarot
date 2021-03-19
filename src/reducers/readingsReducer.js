const initialState = {
    counter: 0,
    readings: [],
    flag: false
}

const readingsReducer = (state= initialState, action) => {
    switch(action.type){
        case "INCREMENT": 
        return {...state, counter: state.counter + 1}

        case "ADD_READING":
        return {...state, readings: [...state.readings, {question: action.payload.question, cards: action.payload.cards}], flag: true }

        case "SET_FLAG":
        return {...state, flag: !state.flag}

        case "SET_FLAG_FALSE":
        return {...state, flag: false}

        default:
            return {...state}
    }
}

export default readingsReducer

