export const initialState = {
    isLogin: false,
    username: "",

};

export const actionTypes = {
    TOGGLE_LOGIN: "TOGGLE_LOGIN",
    SET_USERNAME: "SET_USERNAME"
};

export const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_LOGIN:
            return {
                ...state,
                isLogin: action.condition,
            };

        case actionTypes.SET_USERNAME:
            return {
                ...state,
                username: action.username
            }
        default:
            return state;
    }
};