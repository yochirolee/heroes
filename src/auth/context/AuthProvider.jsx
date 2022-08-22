import { useReducer } from "react";
import { Types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { AuthReducer } from "./AuthReducer";

const initialState = { logged: false };
const init = () => {
	const user = JSON.parse(localStorage.getItem("user"));
	return {
		logged: !!user,
		user: user,
	};
};

export const AuthProvider = ({ children }) => {
	const [authState, dispatch] = useReducer(AuthReducer, initialState, init);

	const login = (name = "") => {
		const user = { id: "Abc", name: name };
		const action = {
			type: Types.login,
			payload: user,
		};
		localStorage.setItem("user", JSON.stringify(user));
		dispatch(action);
	};

	const logout = () => {
		localStorage.removeItem("user");
		const action = {
			type: Types.logout,
		};
		dispatch(action);
	};
	return (
		<AuthContext.Provider value={{ ...authState, login, logout }}>{children}</AuthContext.Provider>
	);
};
