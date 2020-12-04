import {
    NO_PROFILE,
    GET_PROFILE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    VERIFY,
    LOGOUT,
    GET_ACCOUNTS,
    ADD_ACCOUNT,
    DEPOSIT,
    BUY,
    SEND,
} from "../actions/types";

const initialState = {
    user: {},
    authenticated: false,
    loading: false,
    error: null,
    accounts: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case NO_PROFILE:
            return initialState;
        case GET_PROFILE:
            return {
                ...state,
                user: action.payload,
                authenticated: true,
            };
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false,
                authenticated: true,
            };
        case SIGNUP_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case SIGNUP_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false,
                authenticated: true,
            };
        case VERIFY:
            return {
                ...state,
                user: action.payload,
            };
        case GET_ACCOUNTS:
            return {
                ...state,
                accounts: action.payload,
            };
        case ADD_ACCOUNT:
            return {
                ...state,
                accounts: [...state.accounts, action.payload],
            };
        case DEPOSIT:
            return {
                ...state,
                accounts: action.payload,
            };
        case BUY:
            return {
                ...state,
                user: action.payload,
            };
        case SEND:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
}
