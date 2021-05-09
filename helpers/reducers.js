export const SET_PROJECT_DATA = "SET_PROJECT_DATA";

export default function reducers(state, action) {
	switch (action.type) {
		case SET_PROJECT_DATA: {
			console.log("state:", state);
			return { ...state, projects: action.value };
		}

		default:
			throw new Error(
				`Tried to reduce with unsupported action type: ${action.type}`
			);
	}
}