export const increment = () => {
    return {
        type: 'INCREMENT',
    }
}

export const setFlag = () => {
    return {
        type: 'SET_FLAG',
    }
}

export const setFlagFalse = () => {
    return {
        type: 'SET_FLAG_FALSE',
    }
}


export const fetchReadings = () =>{
        return (dispatch) => {
            let config = {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${sessionStorage.token}`
                }
                }
                fetch('http://localhost:3000/api/v1/readings', config)
                // fetch('https://safe-cove-73377.herokuapp.com/api/v1/readings', config)
                .then(resp => resp.json())
                .then(data =>{ 
                    dispatch({type: 'ADD_READINGS', payload: data})
        })
    }
}