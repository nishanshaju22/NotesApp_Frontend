import React from 'react'
import NotesCard from './NotesCard'
import { IoCloseCircleOutline } from 'react-icons/io5';

const Model = ({closeModel, title, content, handleDelete}) => {

  return (
    <div className='fixed w-full h-full top-0 left-0 bg-black/20'>
        <div className='w-full h-full flex items-center justify-center'>
            {}
            <div className='relative w-[500px] h-[450px] gap-y-4 bg-white rounded-lg p-8 flex flex-col items-center justify-center'>
                <h4 className='font-bold text-3xl text-center text-black'>Are you sure you want to delete?</h4>
                <NotesCard title={title} content={content} isModel={true} />
                <div className='w-full flex items-center justify-center gap-x-6'>
                    <button onClick={closeModel} className='bg-blue-600 p-3 rounded-lg flex items-center w-[140px] justify-center gap-x-2 hover:bg-blue-500'>
                        <span className='text-sm'>Cancel</span>
                    </button>
                    <button onClick={handleDelete} className='bg-red-600 p-3 rounded-lg flex items-center w-[140px] justify-center gap-x-2 hover:bg-red-500'>
                        <span className='text-sm'>Yes</span>
                    </button>
                </div>
                <button onClick={closeModel} className='absolute top-2 right-2'>
                    <IoCloseCircleOutline className='w-6 h-6 text-black'/>
                </button>
            </div>
        </div>
    </div>
  );
};

export default Model