import { useContext, useState } from 'react'
import { AppContext } from '../context/context'
import { NoteType, ActionType, Tag } from '../context/types'
import { useNavigate, useParams } from "react-router-dom"
import { AiFillTag } from "react-icons/ai"

function NoteForm() {
    const { state, dispatch } = useContext(AppContext)
    const Navigation = useNavigate();
    const { tag } = useParams();

    const note = tag ? (state.find(s => s.id === Number(tag)) ?? {} as NoteType) : {} as NoteType;
    const h1Title = tag ? "Edit a Note" : "Create a Note";
    const btnTitle = tag ? "Save" : "Create";

    const [noteTag, setNoteTag] = useState<number>(note.tag || 0);
    const onSubmit = (e: any) => {
        e.preventDefault();
        if (!note.title || !note.content) {
            alert("Please fill in all!");
            console.log(note)
        }
        else {
            const date = new Date();
            const time = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
            note.tag = noteTag;
            if (!tag) {
                dispatch({
                    type: ActionType.CREATE, payload: {
                        ...note,
                        id: date.getTime(),
                        modifiedDate: time,
                        createDate: time,
                    }
                });
            }
            else {
                dispatch({
                    type: ActionType.EDIT, payload: {...note, modifiedDate: time,}
                });
            }
            Navigation("/");

        }
    }
    return (
        <div className='h-[100vh] w-full flex justify-center items-center'>
            <form onSubmit={onSubmit} className='w-[600px] py-10 px-10 rounded-3xl border-solid border-2 border-gray-200 shadow-lg'>
                <h1 className='text-center font-medium text-4xl pb-8 text-[#333]'>{h1Title}</h1>
                <div className=' flex items-center gap-x-2 pb-1'>
                    <p className='pl-3 text-gray-400'>Tag:</p>
                    <ul className='flex gap-x-0'>
                        {
                            Tag.map(item => <li onClick={() => setNoteTag(item.id)} key={item.id} className={`${noteTag === item.id ? "bg-stone-300" : ""} p-2 rounded-full text-2xl ${item.color} cursor-pointer`}><AiFillTag /></li>)
                        }
                    </ul>
                </div>
                <input required onChange={(e: any) => note.title = e.target.value.trim()} defaultValue={note.title} className='w-full py-2 indent-3 outline-none border-solid border-b-2 border-gray-200' type="text" placeholder='Title' />
                <textarea required onChange={(e: any) => note.content = e.target.value.trim()} defaultValue={note.content} className='w-full h-56 py-2 indent-3 outline-none border-solid border-b-2 border-gray-200 mb-5' placeholder='Text' />
                <button className='font-medium text-[1.2rem] px-12 text-white py-2 rounded-[40px] block m-auto bg-[#46424a]' type='submit'>{btnTitle}</button>
            </form>
        </div>
    )
}

export default NoteForm
