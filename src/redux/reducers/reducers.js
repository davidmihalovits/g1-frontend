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
    CHANGE_PASSWORD,
    GET_ACCOUNTS,
    ADD_ACCOUNT,
    DEPOSIT,
    BUY,
    SELL,
    SEND_REQUEST,
    SEND_FAIL,
    SEND_SUCCESS,
    UPDATE_PROFILE,
    GET_HISTORY,
} from "../actions/types";

const initialState = {
    user: {},
    authenticated: false,
    loading: false,
    error: null,
    accounts: [],
    transactions: [],
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
        case SELL:
            return {
                ...state,
                user: action.payload,
            };
        case SEND_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case SEND_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case SEND_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false,
            };
        case UPDATE_PROFILE:
            return {
                ...state,
                user: action.payload,
            };
        case CHANGE_PASSWORD:
            return {
                ...state,
                user: action.payload,
            };
        case GET_HISTORY:
            return {
                ...state,
                transactions: action.payload,
            };
        case LOGOUT:
            return {
                user: {},
                authenticated: false,
                loading: false,
                error: null,
                accounts: [],
                transactions: [],
            };
        default:
            return state;
    }
}
