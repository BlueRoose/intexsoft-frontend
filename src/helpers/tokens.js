export const getSessionFromStorage = () => localStorage.getItem("token");

export const removeSessionFromStorage = () => localStorage.removeItem("token");

export const addSessionToStorage = (token) => localStorage.setItem("token", token);
