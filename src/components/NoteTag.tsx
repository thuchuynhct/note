import { AiFillTag } from "react-icons/ai"
import { Link } from "react-router-dom"

function NoteTag({ item }: { item: { id?: number, name: string, color: string } }) {
  return (
    <Link to={`/${item.id ?? "" }`} 
    className={`hover:bg-white flex items-center gap-x-2 py-2 px-3 ${item.color} rounded-lg text-gray-500 transition-all cursor-pointer
                sm:px-2 sm:rounded-full`}>
        <AiFillTag size={32} />
        <span className="sm:hidden text-lg font-medium">{item.name}</span>
    </Link>
  )
}

export default NoteTag
