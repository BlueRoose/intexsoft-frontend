export const getSessionFromStorage = () => localStorage.getItem("token");

export const removeSessionFromStorage = () => localStorage.removeItem("token");
