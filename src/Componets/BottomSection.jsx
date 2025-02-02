import React, { useEffect, useState } from 'react'
import NotesCard from './NotesCard'
import { deleteNote, getNote, getNotes, updateNote } from '../Services/notes_services';
import { FiLoader } from "react-icons/fi";
import Model from './DeleteModel';
import EditModel from './EditModel';



const BottomSection = () => {

    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [modelContent, setModelContent] = useState(null)

    const [isModelOpen, setIsModelOpen] = useState(false)
    const [isEditModelOpen, setEditIsModelOpen] = useState(false)
    const [noteId, setNoteId] = useState(null)

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");


    useEffect(() => {
        setIsLoading(true);

        async function getNotesArr() {

            try {
                const data = await getNotes();
                setNotes(data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }

        getNotesArr();

    }, []);

    
    useEffect(() => {
        const getSingleNote = async () => {
            try {
                const note = await getNote(noteId)
                setModelContent(note)
            } catch (error) {
                console.log(error)
            }
            
        }

        if (noteId) {
            getSingleNote()        
        }

    }, [noteId])


    const handleDeleteNote = async () => {
        try {
            const res = noteId && ( await deleteNote(noteId))
            
            if (res.status === 204) setIsModelOpen(false);

        } catch (error) {
            console.log(error);
        }
    }


    const handleUpdateNote = async () => {
        try {
            const data = {
                title: title,
                content: content
            }
            const res = noteId && (await updateNote(noteId, data))
            if (res.content) setEditIsModelOpen(false);

        } catch (error) {
            console.log(error);
        }
    }

  return (
    <> 
    {isModelOpen && modelContent?.content && <Model content={modelContent.content} title={modelContent.title} handleDelete={handleDeleteNote} closeModel={() => setIsModelOpen(false)}/>}
    
    {isEditModelOpen && modelContent?.content && <EditModel title={modelContent?.title} updateTitle={title} updateContent={content} setTitle={setTitle} setContent={setContent} handleUpdate={title.length < 1 || content.length < 1 ? () => {} : handleUpdateNote} closeModel={() => setEditIsModelOpen(false)}/>}
        
        <div className=' flex w-full items-center my-8 px-8 gap-8 flex-wrap'>

            {
                isLoading ? (
                    <div className='w-full h-full flex items-center justify-center'>
                        <FiLoader className='w-14 h-14 animate-spin text-blue-100 mt-14'/> 
                    </div>
                ) : (
                    <>
                        {notes.map((note) => (
                            <NotesCard 
                                key={note.id} 
                                content={note.content} 
                                title={note.title} 
                                id={note.id} 
                                setNoteId={() => setNoteId(note.id)} 
                                isDeleteBtnClicked={() => setIsModelOpen(true)} 
                                isEditBtnClicked={() => setEditIsModelOpen(true)}
                            />
                        ))}
                    </>
                )
            }

        </div>
    </>
    
  )
}

export default BottomSection