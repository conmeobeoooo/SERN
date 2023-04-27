import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoadingGender: false,
    genders: [],
    roles: [],
    positions: [],
    users: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            let copyState = { ...state }
            copyState.isLoadingGender = true
            console.log('fetch gender start', action);
            return {
                ...copyState,
            }
        case actionTypes.FETCH_GENDER_SECCESS:
            state.genders = action.data
            state.isLoadingGender = false
            console.log('fetch gender success', action);
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_FAILED:
            console.log('fetch gender failed', action);
            state.isLoadingGender = false
            state.genders = []
            return {
                ...state,
            }
        case actionTypes.FETCH_POSITION_SECCESS:
            state.positions = action.data
            return {
                ...state,
            }
        case actionTypes.FETCH_POSITION_FAILED:
            state.positions = []
            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_SECCESS:
            state.roles = action.data
            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_FAILED:
            state.roles = []
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_USER_SUCCESS:
            state.users = action.users
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_USER_FAILED:
            state.users = []
            return {
                ...state
            }
        default:
            return state;
    }
}

export default adminReducer;