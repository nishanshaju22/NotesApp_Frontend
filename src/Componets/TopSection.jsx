import React, { useState } from 'react'
import { IoSendSharp } from "react-icons/io5";
import { postNotes } from '../Services/notes_services';
import { FaHourglassEnd } from "react-icons/fa";


const TopSection = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const resetForm = () => {
        setContent("")
        setTitle("")

    }

    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true)

        try {
            // const formData = new FormData();

            // formData.append("title", title);
            // formData.append("content", content)

            const res = await postNotes({
                title: title,
                content: content,
            })
            console.log(res)

            if (res.content) resetForm()

        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-y-4 w-[60%] my-8 z-10'>
        <h1 className='text-4xl font-extrabold text-center'>Hello!, Welcome to Jotter</h1>
        <input 
            type="text" 
            id='title' 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className='outline-none p-2 rounded-lg text-black placeholder:text-gray-700' 
            placeholder='Enter Title of your note..' 
        />
        <textarea 
            name='content' 
            id='content' 
            onChange={(e) => setContent(e.target.value)}
            value={content}
            className='outline-none p-2 rounded-lg text-black  h-[150px] placeholder:text-gray-700'
            placeholder='Enter your notes Content..'
        />
        <div className='w-full flex items-center justify-center'>
            <button type='submit' className='bg-green-600 p-3 rounded-lg w-[20%] flex items-center justify-center gap-x-2 hover:bg-green-500'>
                {isLoading ? <FaHourglassEnd className='h-5 w-5 animate-spin' /> : (
                    <>
                        <span>Add Notes</span>
                        <IoSendSharp className='h-5 w-5'/> 
                    </>    
                )}
                
            </button>
        </div>
    </form>
  )
}

export default TopSection