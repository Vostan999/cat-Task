const idState = {
    id:1
}

const idReducer = (state = idState, action) => {
    switch (action.type) {
        case 'SET_ID':
            return {
                id: action.payload,
            };
        default:
            break;
    }
    return state;
}

export {
    idReducer
}