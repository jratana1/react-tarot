export default function count(state = {
    count: 0
}, action) {
    switch (action.type) {
      case 'BUTTON_INCREMENT':
        return {count: state.count + 1}
      case 'DECREMENT':
        return state.count - 1
      default:
        return state
    }
  }