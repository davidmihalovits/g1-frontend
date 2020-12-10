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
    SEND_REQUEST,
    SEND_FAIL,
    SEND_SUCCESS,
} from "./types";

export const getProfile = () => (dispatch) => {
    const token = localStorage.getItem("token");

    if (!token) {
        dispatch({
            type: NO_PROFILE,
        });
    }

    if (token) {
        fetch("http://localhost:5000/profile", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                token: token,
            },
        })
            .then((res) => res.json())
            .then((res) =>
                dispatch({
                    type: GET_PROFILE,
                    payload: res,
                })
            );
    }
};

export const login = (login) => (dispatch) => {
    dispatch({
        type: LOGIN_REQUEST,
    });

    fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(login),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.token && res.user) {
                localStorage.setItem("token", res.token);

                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.user,
                });
            } else if (res.status === "Invalid credentials.") {
                dispatch({
                    type: LOGIN_FAIL,
                    payload: res.status,
                });
            }
        });
};

export const signup = (signup) => (dispatch) => {
    dispatch({
        type: SIGNUP_REQUEST,
    });

    fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(signup),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.token && res.user) {
                localStorage.setItem("token", res.token);

                dispatch({
                    type: SIGNUP_SUCCESS,
                    payload: res.user,
                });
            } else if (res.status === "Enter your first name.") {
                dispatch({
                    type: SIGNUP_FAIL,
                    payload: res.status,
                });
            } else if (res.status === "Enter your last name.") {
                dispatch({
                    type: SIGNUP_FAIL,
                    payload: res.status,
                });
            } else if (res.status === "Enter a valid email address.") {
                dispatch({
                    type: SIGNUP_FAIL,
                    payload: res.status,
                });
            } else if (
                res.status === "Password must be at least 6 characters."
            ) {
                dispatch({
                    type: SIGNUP_FAIL,
                    payload: res.status,
                });
            } else if (res.status === "Email already taken.") {
                dispatch({
                    type: SIGNUP_FAIL,
                    payload: res.status,
                });
            }
        });
};

export const verify = (verify) => (dispatch) => {
    const token = localStorage.getItem("token");

    if (token) {
        fetch("http://localhost:5000/verify", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                token: token,
            },
            body: JSON.stringify(verify),
        })
            .then((res) => res.json())
            .then((res) =>
                dispatch({
                    type: VERIFY,
                    payload: res,
                })
            );
    }
};

export const getAccounts = () => (dispatch) => {
    const token = localStorage.getItem("token");

    if (token) {
        fetch("http://localhost:5000/getAccounts", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                token: token,
            },
        })
            .then((res) => res.json())
            .then((res) =>
                dispatch({
                    type: GET_ACCOUNTS,
                    payload: res,
                })
            );
    }
};

export const addAccount = (account) => (dispatch) => {
    const token = localStorage.getItem("token");

    if (token) {
        fetch("http://localhost:5000/addAccount", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                token: token,
            },
            body: JSON.stringify(account),
        })
            .then((res) => res.json())
            .then((res) =>
                dispatch({
                    type: ADD_ACCOUNT,
                    payload: res,
                })
            );
    }
};

export const deposit = (deposit) => (dispatch) => {
    const token = localStorage.getItem("token");

    if (token) {
        fetch("http://localhost:5000/deposit", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                token: token,
            },
            body: JSON.stringify(deposit),
        })
            .then((res) => res.json())
            .then((res) =>
                dispatch({
                    type: DEPOSIT,
                    payload: res,
                })
            );
    }
};

export const buy = (buy) => (dispatch) => {
    const token = localStorage.getItem("token");

    if (token) {
        fetch("http://localhost:5000/buy", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                token: token,
            },
            body: JSON.stringify(buy),
        })
            .then((res) => res.json())
            .then((res) =>
                dispatch({
                    type: BUY,
                    payload: res,
                })
            );
    }
};

export const send = (send) => (dispatch) => {
    const token = localStorage.getItem("token");

    dispatch({
        type: SEND_REQUEST,
    });

    if (token) {
        fetch("http://localhost:5000/send", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                token: token,
            },
            body: JSON.stringify(send),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.sender) {
                    dispatch({
                        type: SEND_SUCCESS,
                        payload: res.sender,
                    });
                } else if (res.status === "Invalid recipient.") {
                    dispatch({
                        type: SEND_FAIL,
                        payload: res.status,
                    });
                }
            });
    }
};
