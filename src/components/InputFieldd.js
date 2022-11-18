// INPUTFIELD

import React, { useState, useEffect } from 'react';

// useState functie

function InputFieldd({ onSubmit, emptyMusicList, sortItemRating, sortSongTitles, sortArtist, filterGenre }) {
  const [inputTitle, setTitle] = useState("");
  const [inputArtist, setArtist] = useState("");
  const [inputGenre, setGenre] = useState("");
  const [inputRating, setRating] = useState("");

  // useEffect (puur voor mezelf om te zien wat het doet)

  useEffect(() => {
    console.log("Ik ben Useffect")
  }, []);

  // onButtonPress maakt gebruik van onSubmit (addSong in Songoverview). 
  // De arguments zijn inputTitle, inputArtsit, inputGenre, inputRatign. 

  function onButtonPress() {
    if (inputTitle.length > 0 && inputArtist.length > 0 && inputGenre.length > 0 && inputRating.length > 0) {
      console.log(`Submitting ${inputTitle + inputArtist + inputGenre + inputRating}`);
      onSubmit(inputTitle, inputArtist, inputGenre, inputRating);
      setTitle("")
      setArtist("")
      setGenre("")
      setRating("")
    } else {
      alert("Please fill in all fields")
    }
  }


  return (

    <div>

      {/* Inputfields  */}

      <table style={{ width: "100%" }}>
        <tbody>
          <tr  className="song-header">

            {/* Input songs  */}

            <td className="song-row__item">
              <h3>Title song</h3>
              <input
                type="text"
                value={inputTitle}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="song"
              />
            </td>

            {/* Input artists  */}

            <td className="song-row__item">
              <h3>Name artist</h3>
              <input
                type="text"
                value={inputArtist}
                onChange={(e) => setArtist(e.target.value)}
                placeholder="artist"
              />
            </td>

            {/* Input genre, selectbox */}

            <td className="song-row__item">
              <h3>Genre</h3>
              <select
                type="selectbox"
                value={inputGenre}
                onChange={(e) => setGenre(e.target.value)}
                name="genre"
              >
                <option value="">Chose genre!</option>
                <option value="Rock">Rock</option>
                <option value="Jazz">Jazz</option>
                <option value="Reggaeton">Reggeaton</option>
                <option value="Hiphop">Hiphop</option>
              </select>
            </td>

            {/* Input rating, selectbox  */}

            <td  className="song-row__item">
              <h3>Rating</h3>
              <select style={{ width: "100%" }}
                type="selectbox"
                value={inputRating}
                onChange={(e) => setRating(e.target.value)}
                name="rating"
              >
                <option value="">Rate here!</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Add / remove buttons   */}

      <div className='buttons'>
        <button className='add-button' onClick={onButtonPress}  >
          Add Song
        </button>
        <button className="empty-button" onClick={emptyMusicList}>Delete all songs</button>
      </div>

      {/* Titles */}

      <div className='titless'>
        <h3>Title song</h3> <h3>Artist</h3> <h3>Genre</h3> <h3>Rating</h3>
      </div>

      {/* Sort buttons + selectbox */}

      <div className='sort-buttons'>
        <button className="sort-button" onClick={sortSongTitles}>Sort titles</button>
        <button className="sort-button" onClick={sortArtist}>Sort artist</button>

        <select 
          className='selectGenre'
          type="selectbox"
          onChange={(e) => filterGenre(e.target.value)}
          name="genre"
        >
          <option value="">Chose genre!</option>
          <option value="Rock">Rock</option>
          <option value="Jazz">Jazz</option>
          <option value="Reggaeton">Reggeaton</option>
          <option value="Hiphop">Hiphop</option>
        </select>

        <button className="sort-button" onClick={sortItemRating}>Sort rating</button>

      </div>
    </div>
  );
}

export default InputFieldd;

