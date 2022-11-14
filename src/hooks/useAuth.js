import React from "react";
import { AuthContext } from "../auth/AuthProvider";

export function useAuth() {
    return React.useContext(AuthContext);
}