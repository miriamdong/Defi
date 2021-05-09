import axios from "axios";
import { useReducer, useEffect } from "react";
import reducers, { SET_PROJECT_DATA } from "../helpers/reducers";

export default function useAppData() {
	// initial state
	const initState = {	projects: [] };
	const [state, dispatch] = useReducer(reducers, initState);

	// fetch the inital data
	useEffect(() => {
			axios.get("http://defidapp.herokuapp.com/projects")
				.then((res) => {
					console.log("data:", res.data);
			dispatch({
				type: SET_PROJECT_DATA,
				value: res.data
			});
		});
	}, []);


console.log("state:", state);
	return { state};
}
