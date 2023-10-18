import { useState } from "react";
import './spotify.css'
import Playlist from "../../components/spotify/Playlist";
export default function Spotify() {
    const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  
    const handlePlaylistClick = (playlist) => {
      setSelectedPlaylist(playlist);
    };
  
    return (
      <div className="container">
        <div className="playlist">
          <h4>Playlist</h4>
          <Playlist onPostClick={handlePlaylistClick} />
        </div>
        <div className="main-container">
          <div className="main">
            {selectedPlaylist && (
              <div className="details-container">
                <div>{selectedPlaylist.artist}</div>
                <div>{selectedPlaylist.artistDescription}</div>
                <div>{selectedPlaylist.playlist}</div>
                <img src={selectedPlaylist.image} alt="folk image"/>
              </div>
            )}
          </div>
          <div className="playbar">playbar</div>
        </div>
      </div>
    );
  }
  