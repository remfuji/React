
import { Link } from 'react-router-dom';
import "./playlist.css";

const dataPlaylist = [
  {
    artist: "bob",
    id: 1,
    artistDescription:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    playlist: "modern age",
    image:
      "https://assets-global.website-files.com/60a0ade9a9e15bdd6b98f68b/62f4bfb1844ebd01236fde63_how%20to%20write%20a%20folk%20song.jpg",
  },
  {
    artist: "jhon",
    id: 2,
    artistDescription:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    playlist: "folk",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/24/2022/09/GettyImages-1053601282-016b823.jpg?quality=90&webp=true&resize=1500,1001",
  }

];

export default function Playlist({ onPlaylistClick }) {
  return (
    
    <div className="playlist-container">
      {dataPlaylist.map((playlist) => (
        <div
          className="item-playlist"
          onClick={() => onPlaylistClick(playlist)}
          key={playlist.id}
        >
          
          <Link  to="/Playlist">{playlist.playlist}</Link>
        </div>
      ))}
    </div>
  );
}
