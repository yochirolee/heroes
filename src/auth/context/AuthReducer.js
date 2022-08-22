import { Types } from "../types/types";

export const AuthReducer = (state, action) => {
	switch (action.type) {
		case Types.login:
			return {
                 ...state,
                 logged:true,
                 user:action.payload
            };

		case Types.logout:
			return {
                logged:false
            }

		default:
			return state;
	}
};
