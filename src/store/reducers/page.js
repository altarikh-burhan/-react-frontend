import { FECTH_PAGE } from '../types';

const initialState = {};

export default function (state = initialState, action) {
	switch (action.type) {
		case FECTH_PAGE:
		return {
			...state,
			...action.payload,
		};

		default:
			return state; 
	}
}