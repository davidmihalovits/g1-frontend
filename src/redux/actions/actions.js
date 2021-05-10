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
} from "./types";

export const getProfile = () => (dispatch) => {
    const token = localStorage.getItem("token");

    if (!token) {
        dispatch({
            type: NO_PROFILE,
        });
    }

    if (token) {
        fetch("https://goldcoin-server.herokuapp.com/profile", {
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

    fetch("https://goldcoin-server.herokuapp.com/login", {
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

    fetch("https://goldcoin-server.herokuapp.com/signup", {
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
        fetch("https://goldcoin-server.herokuapp.com/verify", {
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
        fetch("https://goldcoin-server.herokuapp.com/getAccounts", {
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
        fetch("https://goldcoin-server.herokuapp.com/addAccount", {
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
        fetch("https://goldcoin-server.herokuapp.com/deposit", {
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
        fetch("https://goldcoin-server.herokuapp.com/buy", {
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

export const sell = (sell) => (dispatch) => {
    const token = localStorage.getItem("token");

    if (token) {
        fetch("https://goldcoin-server.herokuapp.com/sell", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                token: token,
            },
            body: JSON.stringify(sell),
        })
            .then((res) => res.json())
            .then((res) =>
                dispatch({
                    type: SELL,
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
        fetch("https://goldcoin-server.herokuapp.com/send", {
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

export const updateProfile = (updateProfile) => (dispatch) => {
    const token = localStorage.getItem("token");

    if (token) {
        fetch("https://goldcoin-server.herokuapp.com/updateProfile", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                token: token,
            },
            body: JSON.stringify(updateProfile),
        })
            .then((res) => res.json())
            .then((res) =>
                dispatch({
                    type: UPDATE_PROFILE,
                    payload: res,
                })
            );
    }
};

export const changePassword = (changePassword) => (dispatch) => {
    const token = localStorage.getItem("token");

    if (token) {
        fetch("https://goldcoin-server.herokuapp.com/changePassword", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                token: token,
            },
            body: JSON.stringify(changePassword),
        })
            .then((res) => res.json())
            .then((res) =>
                dispatch({
                    type: CHANGE_PASSWORD,
                    payload: res,
                })
            );
    }
};

export const getHistory = () => (dispatch) => {
    const token = localStorage.getItem("token");

    if (token) {
        fetch("https://goldcoin-server.herokuapp.com/getHistory", {
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
                    type: GET_HISTORY,
                    payload: res,
                })
            );
    }
};

export const logout = (history) => (dispatch) => {
    dispatch({
        type: LOGOUT,
    });
    localStorage.removeItem("token");
    history.push("/");
    window.location.reload();
};
