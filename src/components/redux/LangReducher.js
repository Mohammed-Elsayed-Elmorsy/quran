export const langreducer = (state = { arabic: false }, action) => {
    if (action.type === 'ARABIC')
        return { ...state, arabic: true }
    else if (action.type === 'ENGLISH') {
        return { ...state, arabic: false }
    }
    else {
        return state
    }
}

export const overreducer = (state = { show: false }, action) => {
    if (action.type === 'SHOW')
        return { ...state, show: true }
    else if (action.type === 'HIDE') {
        return { ...state, show: false }
    }
    else {
        return state
    }
}