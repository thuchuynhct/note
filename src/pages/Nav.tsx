import { CgNotes } from "react-icons/cg"
import { MdOutlineAddCircleOutline } from "react-icons/md"
import NoteTag from "../components/NoteTag"
import { Link } from "react-router-dom"
import { Tag } from "../context/types"

function Nav() {
  return (
    <nav>
      <div className=" px-6 pt-12 pb-8 mb-5 border-solid border-b-2 border-gray-200
                       sm:px-2 sm:py-5">
        <div className="flex justify-between p-2 rounded-xl bg-white
                        border-solid border-[1px] border-gray-400 sm:px-[6px]">
          <Link to="/" className='flex items-center gap-x-2'>
            <CgNotes size={32} />
            <span className='font-medium text-2xl
                            sm:hidden'>Notes</span>
          </Link>
          <div className="sm:hidden hover:rotate-45 text-green-500 cursor-pointer">
            <Link to="/create"><MdOutlineAddCircleOutline size={36} /></Link>
          </div>
        </div>
      </div>
      <div className="px-6 pb-5
                      sm:px-2">
        <NoteTag item={{ name: "All", color: "text-[#dba919]" }} />
        {
          Tag.map((item) => <NoteTag key={item.id} item={item} />)
        }
      </div>
    </nav>
  )
}

export default Nav