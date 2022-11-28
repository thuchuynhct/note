import { NoteType, ActionType } from "./types";

const reducers = (state: NoteType[], action: { type: number, payload: NoteType }): NoteType[] => {

    switch (action.type) {
        case ActionType.CREATE:
            return [...state, action.payload];

        case ActionType.EDIT:
            const newState = state.filter(item => item.id !== action.payload.id);
            return [...newState, action.payload];

        case ActionType.REMOVE:
            return state.filter(item => item.id !== action.payload.id);

        default:
            return state;
    }
}

export { reducers };