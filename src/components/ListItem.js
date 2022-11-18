// LISTITEM

import React from "react"
import logo from "./IMG/3.png"

function ListItem({ song, clickItem, handleDelete }) {
  console.log("SONG", song)

  return (
    <li
      key={song.id}
      className="list-item"
      value={song.title}
    >
      <div onClick={clickItem} className="item-title"> {song.title} </div>
      <div onClick={clickItem} className="item-title"> {song.artist} </div>
      <div onClick={clickItem} className="item-title"> {song.genre} </div>
      <div onClick={clickItem} className="item-title"> {song.rating} </div>
      <img onClick={() => { handleDelete(song) }} src={logo} alt="" width="32px" height="32px" />
    </li>
  )
}
export default ListItem     