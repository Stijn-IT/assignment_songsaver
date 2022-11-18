// SONG OVERVIEW

import React, { Component } from "react"
import FilteredSongs from "./FilteredSongs"
import SongForm from "./SongForm"

class SongOverview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: [{
        id: 1,
        title: "Purple Haze",
        artist: "Jimi Hendrix",
        genre: "Rock",
        rating: 4
      },
      {
        id: 2,
        title: "Lose Yourself",
        artist: "Eminem",
        genre: "Hiphop",
        rating: 9
      },
      {
        id: 3,
        title: "Fly Me To the Moon",
        artist: "Frank Sinatra",
        genre: "Jazz",
        rating: 10
      },
      {
        id: 4,
        title: "Purple, Yellow, Red & Blue",
        artist: "Pink Floyd",
        genre: "Rock",
        rating: 3
      },
      {
        id: 5,
        title: "Quiero Bailar",
        artist: "Ivy Queen",
        genre: "Reggaeton",
        rating: 6
      },
      {
        id: 6,
        title: " My Favorite Things ",
        artist: "John Coltrane",
        genre: "Jazz",
        rating: 7
      },
      {
        id: 7,
        title: "Sympathy for the Devil",
        artist: "The Rolling Stones",
        genre: "Rock",
        rating: 2
      }],
      songFilter: [{
        id: 1,
        title: "Purple Haze",
        artist: "Jimi Hendrix",
        genre: "Rock",
        rating: 4
      },
      {
        id: 2,
        title: "Lose Yourself",
        artist: "Eminem",
        genre: "Hiphop",
        rating: 9
      },
      {
        id: 3,
        title: "Fly Me To the Moon",
        artist: "Frank Sinatra",
        genre: "Jazz",
        rating: 10
      },
      {
        id: 4,
        title: "Purple, Yellow, Red & Blue",
        artist: "Pink Floyd",
        genre: "Rock",
        rating: 3
      },
      {
        id: 5,
        title: "Quiero Bailar",
        artist: "Ivy Queen",
        genre: "Reggaeton",
        rating: 6
      },
      {
        id: 6,
        title: " My Favorite Things ",
        artist: "John Coltrane",
        genre: "Jazz",
        rating: 7
      },
      {
        id: 7,
        title: "Sympathy for the Devil",
        artist: "The Rolling Stones",
        genre: "Rock",
        rating: 2
      }],
    }
    this.addSong = this.addSong.bind(this);
    this.emptyMusicList = this.emptyMusicList.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // addSong aan arrays songFilter songs 

  addSong = (title, artist, genre, rating) => {
    this.setState({
      songs: [
        ...this.state.songs,
        {
          id: this.state.songs.length +
            1,
          title: title,
          artist: artist,
          genre: genre,
          rating: rating,
        },
      ],
      songFilter: [
        ...this.state.songFilter,
        {
          id: this.state.songFilter.length +
            1,
          title: title,
          artist: artist,
          genre: genre,
          rating: rating,
        },
      ],
    });
  };

  // handeClick arrays songFilter en songs. 

  handleClick(song) {
    console.log("click test", song);
    const list = this.state.songs
    const list2 = this.state.songFilter
    console.log("LIST 1", list)
    console.log("LIST 2", list2)
  }

  // emtyMusicList maakt arrays songFilter en songs leeg. 

  emptyMusicList = () => {
    this.setState({
      songFilter: [],
      songs: [],
    });
  };

  // deleteItem haalt song uit zowel songs als songfilter

  deleteItem = (song) => {
    this.setState((prevState) => {
      const songs = prevState.songFilter
      const songs2 = prevState.songs
      const newList = songs.filter((i) => i.id !== song.id)
      const newList2 = songs2.filter((i) => i.id !== song.id)
      return {
        songFilter: newList,
        songs: newList2
      }
    })
  }

  // sortItemRating sort rating

  sortItemRating = () => {
    this.setState((prevState) => {
      const songs = prevState.songFilter
      const songs2 = prevState.songs
      const newListRatings = songs.sort((firstItem, secondItem) => secondItem.rating - firstItem.rating)
      const newListRatings2 = songs2.sort((firstItem, secondItem) => secondItem.rating - firstItem.rating)
      return {
        songsFilter: newListRatings,
        songs: newListRatings2
      }
    })
  }

  // sortSongTitles sort titles

  sortSongTitles = () => {
    this.setState((prevState) => {
      const songs = prevState.songFilter
      const songs2 = prevState.songs
      const newListSongs = songs.sort((a, b) => a.title > b.title ? 1 : -1)
      const newListSongs2 = songs2.sort((a, b) => a.title > b.title ? 1 : -1)
      return {
        songFilter: newListSongs,
        songs: newListSongs2
      }
    })
  }

  // sortArtist sort artists

  sortArtist = () => {
    this.setState((prevState) => {
      const songs = prevState.songFilter
      const songs2 = prevState.songs
      const newListArtists = songs.sort((a, b) => a.artist > b.artist ? 1 : -1)
      const newListArtists2 = songs2.sort((a, b) => a.artist > b.artist ? 1 : -1)
      return {
        songFilter: newListArtists,
        songs: newListArtists2
      }
    })
  }

  // filterGenre filterd uit songs array om een nieuwe songFilter array te creeeren. 

  filterGenre = (e) => {
    this.setState((prevState) => {
      const songs2 = prevState.songs
      const searchString = e
      const filteredList = songs2.filter((i) =>
        i.genre.includes(searchString))
      return {
        songFilter: filteredList,
        songs: songs2

      }
    })
  }

  render() {
    return (
      <div>
        <SongForm onItemAdd={this.addSong} emptyMusicList={this.emptyMusicList} sortItemRating={this.sortItemRating} sortSongTitles={this.sortSongTitles} sortArtist={this.sortArtist} filterGenre={this.filterGenre} />
        <FilteredSongs Listtt={this.state.songFilter} onnItemClick={this.handleClick} deletteItem={this.deleteItem} />
      </div>
    );
  }
}

export default SongOverview;