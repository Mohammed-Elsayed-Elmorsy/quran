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
    if (action.type === 'SHOWLANG')
        return { ...state, show: true }
    else if (action.type === 'HIDE') {
        return { ...state, show: false }
    }
    else {
        return state
    }
}
export const overModereducer = (state = { show: false }, action) => {
    if (action.type === 'SHOWMODE')
        return { ...state, show: true }
    else if (action.type === 'HIDE') {
        return { ...state, show: false }
    }
    else {
        return state
    }
}
export const modeReducer = (state = { dark: false, loading: true }, action) => {
    if (action.type === 'DARK')
        return { ...state, dark: true }
    else if (action.type === 'LIGHT') {
        return { ...state, dark: false }
    }
    else {
        return state
    }
}