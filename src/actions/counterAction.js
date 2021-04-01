export const addCount = () => {
    return {
        type: 'BUTTON_INCREMENT'
    }
}

export const filter = (query) => {
    return {
        type: 'FILTER',
        payload: query
    }
}