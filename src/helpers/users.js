export const getUserFromStorage = () => localStorage.getItem("user");

export const removeUserFromStorage = () => localStorage.removeItem("user");

export const addUserToStorage = (user) => localStorage.setItem("user", user);
