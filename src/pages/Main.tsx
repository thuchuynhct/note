import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Note from '../components/Note'
import { AppContext } from '../context/context'

function Main() {
    const { state } = useContext(AppContext)
    const { tag } = useParams();
    const notes = tag ? state.filter(item => item.tag === Number(tag)).sort((a, b) => a.id - b.id) : state.sort((a, b) => b.id - a.id);
    console.log(notes)
    return (
        <div className='p-10 flex flex-wrap justify-evenly gap-y-12'>
            {notes.length > 0 ? notes.map(item => <Note key={item.id} note={item} />) : <h2 className='text-2xl'>You not have a Notes!</h2>}
        </div>
    )
}

export default Main
