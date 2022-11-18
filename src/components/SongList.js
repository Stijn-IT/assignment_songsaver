// SONGLIST

import React, { Component } from "react"
import ListItem from "./ListItem"

class SongList extends Component {

  render() {

    return (
      <div>
        <ul className="app-list" >
          {this.props.Listt.map((song) => (
            <ListItem
              key={song.id} 
              id={song.id}
              song={song}
              title={song.title}
              artist={song.artist}
              genre={song.genre}
              rating={song.rating}
              clickItem={() => this.props.onnItemClick(song)}
              handleDelete={() => this.props.deletteItem(song)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default SongList