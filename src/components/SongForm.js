// SONGFORM

import React from "react"
import InputFieldd from "./InputFieldd"


function SongForm({ onItemAdd, emptyMusicList, sortItemRating, sortSongTitles, sortArtist, filterGenre }) {

    return (
        <div className="song-form">
            <h1> Favorite song list </h1>
            <InputFieldd onSubmit={onItemAdd} emptyMusicList={emptyMusicList} sortItemRating={sortItemRating} sortSongTitles={sortSongTitles} sortArtist={sortArtist} filterGenre={filterGenre} />
        </div>
    )
}

export default SongForm