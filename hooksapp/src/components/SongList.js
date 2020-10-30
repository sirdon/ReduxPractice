import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import AddSong from './AddSong';
export default function SongList() {
    const [songs, setSongs] = useState([
        {title:'the dark night', id:1},
        {title:'the dark song', id:2},
        {title:'the love song', id:3}
    ]);
    const addSong = (title)=>{
        setSongs([...songs,{title:title,id:uuidv4()}])
    }
    return (
        
        <div className="song-list">
            <ul>{
                songs.map(song=>{
                    return(
                        <li key={song.id}>{song.title}</li>
                    )
                })
            }</ul>
            <AddSong addSong={addSong}></AddSong>
        </div>
    )
}
