import React,{useState} from 'react'

export default function AddSong({addSong}) {
    const [title, setTitle] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        addSong(title);
        setTitle('');
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label>Add Song:</label>
            <input value={title} onChange={(e)=>{setTitle(e.target.value)}}></input>
            <button>Add Song</button>
        </form>
    )
}
