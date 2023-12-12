
let reducer = (state, action) => {
    if (action.type === true) {
        return {...state, clickDisplay: action.menuD, clickIcon: action.menuI};
    }
    else if (action.type === false) {
        return {...state, clickDisplay: action.menuD1, clickIcon: action.menuI1};
    }
    else {
        return {...state, clickDisplay: action.menuD, clickIcon: action.menuI};
    }
}
export default reducer;
