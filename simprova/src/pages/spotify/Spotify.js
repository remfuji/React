import { useState } from "react";
import './spotify.css'
import Playlist from "../../components/spotify/Playlist";
import Playbar from "../../components/spotify/Playbar";
export default function Spotify() {
    const [selectedPlaylist, setSelectedPlaylist] = useState([]);
  
  console.log(selectedPlaylist)
  
    return (
      <div className="container">
        <div className="playlist">
          <h4>Playlist</h4>
          <Playlist onPlaylistClick={setSelectedPlaylist} />
        </div>
        <div className="main-container">
          <div className="main">
           
              <div className="details-container">
                <div>{selectedPlaylist.artist}</div>
                <div>{selectedPlaylist.artistDescription}</div>
                <div>{selectedPlaylist.playlist}</div>
                <img src={selectedPlaylist.image} alt="folk image"/>
              </div>
           
          </div>
          <div className="playbar"><Playbar/></div>
        </div>
      </div>
    );
  }
  