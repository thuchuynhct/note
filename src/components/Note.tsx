import { useContext, useState } from "react";
import { SlOptions } from "react-icons/sl"
import { NoteType, ActionType } from "../context/types";
import { AiFillTag } from "react-icons/ai"
import { Tag } from "../context/types"
import { AppContext } from "../context/context";
import { Link } from "react-router-dom";

function Note({ note }: { note: NoteType }) {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const { dispatch } = useContext(AppContext);

    const onDelete = () => {
        dispatch({
            type: ActionType.REMOVE,
            payload: note
        })
    }

    return (
        <div onMouseLeave={() => isClicked && setIsClicked(false)} className='sm:h-[300px] hover:shadow-xl flex flex-col w-[300px] h-[260px] bg-slate-200 rounded-2xl py-2 px-4 transition-all'>
            <div className='flex items-start gap-x-1'>
                <div className={`text-xl ${Tag[note.tag].color} pt-1`}>
                    <AiFillTag />
                </div>
                <h2 className='flex-1 text-center font-medium text-lg leading-6'>{note.title}</h2>
                <div className="relative">
                    <button className="pt-1" onClick={() => setIsClicked(!isClicked)}><SlOptions /></button>
                    <ul className={`${isClicked ? "block" : "hidden"} absolute right-0 top-6 bg-gray-300 w-40 text-center rounded-lg overflow-hidden`}>
                        <li className="hover:bg-gray-400 py-2"><Link className="block w-full" to={`/edit/${note.id}`} >Edit</Link></li>
                        <li onClick={onDelete} className="hover:bg-gray-400 py-2"><button className="w-full">Detele</button></li>
                    </ul>
                </div>
            </div>
            <p className='flex-1 max-h-[170px] overflow-y-scroll'>{note.content}</p>
            <p className='sm:text-[.8rem] text-[.9rem] text-gray-500 italic'>Last modifile: {note.modifiedDate}<br />Created at: {note.createDate}</p>
        </div>
    )
}

export default Note