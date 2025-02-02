import React from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5';

const EditModel = ({closeModel, title, updateTitle, content, updateContent, handleUpdate, setTitle, setContent}) => {

  return (
    <div className='fixed w-full h-full top-0 left-0 bg-black/20'>
        <div className='w-full h-full flex items-center justify-center'>
            {}
            <div className='relative w-[500px] h-[470px] gap-y-4 bg-white rounded-lg p-8 flex flex-col items-center justify-center'>
                <h4 className='font-bold text-3xl text-center text-black'>Are you sure you want to edit this note?</h4>
                <p className='text-black'>Title: {title}</p>
                <div className=' bg-slate-900 hover:bg-slate-800 p-6 rounded-lg px-6 flex flex-col gap-y-6 w-full h-[350px]'>
                    <input 
                        type="text" 
                        id='title' 
                        onChange={(e) => setTitle(e.target.value)}
                        value={updateTitle}
                        className='outline-none p-2 rounded-sm bg-slate-200 text-black' 
                        placeholder='Enter Title of your note..' 
                    />
                    <textarea 
                        name='content' 
                        id='content' 
                        onChange={(e) => setContent(e.target.value)}
                        value={updateContent}
                        className='outline-none p-2 rounded-sm text-black bg-slate-200 h-[150px]'
                        placeholder='Enter your notes Content..'
                    />
                </div>

                <div className='w-full flex items-center justify-center gap-x-6'>
                    <button onClick={closeModel} className='bg-blue-600 p-3 rounded-lg flex items-center w-[140px] justify-center gap-x-2 hover:bg-blue-500'>
                        <span className='text-sm'>Cancel</span>
                    </button>
                    <button onClick={handleUpdate} className={`bg-red-600 p-3 rounded-lg flex items-center w-[140px] justify-center gap-x-2 ${updateTitle.length < 1 || updateContent.length < 1 ? "cursor-not-allowed" : "cursor-pointer hover:bg-red-500" }`}>
                        <span className='text-sm'>Update</span>
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

export default EditModel