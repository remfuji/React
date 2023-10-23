import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './Sidebar'
import Info from './Info'
import Login from './Login'



export default function Spotify() {

    const [playlists, setPlaylists] = useState([])
    const [songPlaying, setSongPlaying] = useState({})
    
  
    useEffect(() => {
        async function get() {
            let response = await fetch("http://localhost:3030/playlists")
            response = await response.json()
            setPlaylists(response)
        }
        get()
    }, [])

   

    return (
        <>
            <BrowserRouter>
                <Routes>
                    
                        <Route path='/login' element={<Login />}></Route>
                   
                    <Route path="/" element={<Sidebar playlists={playlists} setSongPlaying={setSongPlaying} />}>
                        <Route path="/playlist/:artist" element={<Info playlists={playlists} setSongPlaying={setSongPlaying} songPlaying={songPlaying} />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}