import React from 'react'
import './sidebar.css'
import SidebarButton from './sidebarButton'
import { MdFavorite } from 'react-icons/md'
import { FaGripfire, FaPlay } from 'react-icons/fa'
import { FaSignOutAlt } from 'react-icons/fa'
import { IoLibrary } from 'react-icons/io5'
import { MdSpaceDashboard} from 'react-icons/md'
export default function Sidebar() {
  return (
  <div className='sidebar-container'>
    <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAbAAEBAAIDAQAAAAAAAAAAAAAAAQQGAgMFB//EADIQAAICAgEDAQcDAgcBAAAAAAABAgMEEQUGEiExExRBUWFxgQdTkyKhMjNScoKRkhX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAHFS2ByBG9Db+QFBNjb36f3AoJsb+gFBNjfkCgEbAoJsNgUAAAAAAAGJyV06sWfsXq6eq6v98vC/Hnf2TPA6Azb8rhLuO5GbuzuMyLMLIlL1n2v+mT+8WmZ+Zl4eZz1XFyylG2it3zrhb2T2/Edafy7m/vE1tW4vTP6muPvHbRzeIvbKy7ucb6/EG2343F6/AHXj5F/SnU0b777JcFy+TZRqyTccTIjZJQ036RklrXzPcz+n6OTxOdxKZTxrr7FGF1c3F1y9nBprT8eW29eu2c1i8X1V03n8dZbVkY1118JuuSfY/aTaf39Gjp/T6fKf/OzsfnvOfi5nu87Uv8AOUaq+2f5WmBidO50eX6OhgX1KvkapvAyKvjXfFf1S/6/r38TbMfEppw68SMN0wrVaU/O4615b8s0zibcOH6rcxXTdUlbg0y1Ga1O5OSl/wAu1RT+OtG8zsrqg52zjCMVuUpPSS+OwNE6Cohk9H8s8jvslLLzK++U25KMZyUUn6rXw+RlfpvlW04/JcBnZE78riclx77ZbnOqxd8G9+fR6/BgdAZ2JV0VzErMmqKrzMyctzS1GU5OL/K9PmdvI41y6o4jlOI1Zj8xiPj8uyqW0kl3xnv5pKa2Bz6fnblfqPzFt9k51+4UW0Vyk3GtSlNbS+DajHyZPXvJ5fFLD5LEslHF4zJqtzoR899c263v7KTk/wAGPxudhUfqbzndkUV1x43Hgm5pLcXNyX4TW/kelj4nG9S8Bl3zyZzx+RjN2dt8lFJrSTSek1FR2gOfW3MX8dw1K46xRy8/Iqxcez17HN67189LbX10Z8+Exo4Doo74XqGo5Sm/a9+v8Tk/Le/nvfx8Hz/Asyed6DwIYz945Lp3Or9pVF7lbGqWtx+e4eV8za+rOSjmdJ5l/CZs1numTw1Ra42O34R7U/L+jQHmdbU2UY/R8cicvbvlcejJlGbXtI+zm5Rl802k/JsWLh4ORydeZx3bX7nZZRaq3qNm4r4Lw2m1/c1XrS6iHH9FV5V6lNcrjW2+2n3Pt9nPulLfw216+PJsmLyHE4HIUYHGX41tnIZU5yronFqCVbblqPp5iv8A0BsK9Ckj6FAAAAAAJr6saKAJodqKdN1HtZJuy2Ov9E3EDt19WNGP7mv38n+Vj3Nfv5P8rAyNeR2/VmP7mv38n+Vj3Nfv5P8AKwMjX3GjH9zX7+T/ACse5r9/J/lYGRr6sihFS7kl3em/iddVCqltW2y+k5tncA0TX3KAAAAAAACgCAoAgKAICgCAoAgKAICgCAoAgKAICgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/2Q==' className='profile-img' alt='profile' />
    <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />}/>
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />}/>
        <SidebarButton title="Player" to="/player" icon={<FaPlay />}/>
        <SidebarButton title="Favorite" to="/favorite" icon={<MdFavorite />}/>
        <SidebarButton title="Library" to="/library" icon={<IoLibrary />}/>
    </div>
    <SidebarButton title="Sign Out" to="/signout" icon={<FaSignOutAlt />}/>
    </div>
  )
}
