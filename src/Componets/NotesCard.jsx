import React from 'react'
import { RiEditLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

const NotesCard = ({title, content, isModel, isDeleteBtnClicked, id, setNoteId, isEditBtnClicked}) => {

  return (
    <>
        <div className={`w-[380px] bg-slate-900 hover:bg-slate-800 rounded-lg px-6 flex flex-col gap-y-6 ${isModel ? 'h-fit py-4' : ' h-[320px] py-6'}`}>
        <h2 className='text-2xl font-semibold pb-2 border-b border-gray-700'>
            {title}
        </h2>
        <p className='h-[144px] overflow-y-auto'>
            {content}
        </p>

        {!isModel && (
            <div className='w-full flex items-center justify-end gap-x-6'>
                <button onClick={() => {
                        isEditBtnClicked()
                        setNoteId(id)
                    }} 
                    className='bg-blue-600 p-3 rounded-lg flex items-center w-[120px] justify-center gap-x-2 hover:bg-blue-500'>
                    <span className='text-sm'>Edit Notes</span>
                    <RiEditLine className='h-5 w-5' />
                </button>
                <button onClick={() => {
                        isDeleteBtnClicked()
                        setNoteId(id)
                    }} 
                    className='bg-red-600 p-3 rounded-lg flex items-center w-[140px] justify-center gap-x-2 hover:bg-red-500'>
                    <span className='text-sm'>Delete Notes</span>
                    <MdDelete className='w-5 h-5' />
                </button>
            </div>
        )}
        </div>
    </>
  )
}

export default NotesCard