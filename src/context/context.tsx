import { createContext, useEffect, useReducer } from "react";
import { NoteType } from "./types";
import { reducers } from "./reducers";

const initialNotes: NoteType[] = [];



const AppContext = createContext<{ state: NoteType[], dispatch: React.Dispatch<any> }>({ state: initialNotes, dispatch: () => null });

const AppProvider = ({ children }: { children: JSX.Element }) => {
    const saved = localStorage.getItem("notes");
    const [state, dispatch] = useReducer(reducers, saved && JSON.parse(saved) || initialNotes);
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(state));
        // console.log(JSON.parse(saved), "Josn")
    }, [state])

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}
export { AppContext, AppProvider };