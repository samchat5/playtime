import React from 'react'
import './App.css'
import SearchBar from '../SearchBar/SearchBar.js'
import SearchResults from '../SearchResults/SearchResults.js'
import Playlist from '../Playlist/Playlist.js'
import Spotify from '../../util/Spotify.js'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { searchResults: [], playlistName: '', playlistTracks: [] }
    this.handleOnAdd = this.handleOnAdd.bind(this)
    this.handleOnRemove = this.handleOnRemove.bind(this)
    this.handleOnNameChange = this.handleOnNameChange.bind(this)
    this.handleOnSave = this.handleOnSave.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleOnAdd (track) {
    if (!this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      this.state.playlistTracks.push(track)
      this.setState({ playlistTracks: this.state.playlistTracks })
    }
  }

  handleOnRemove (track) {
    this.setState({ playlistTracks: this.state.playlistTracks.filter(t => track.id !== t.id) })
  }

  handleOnNameChange (name) {
    this.setState({ playlistName: name })
  }

  handleOnSave () {
    const trackUris = this.state.playlistTracks.map(track => track.uri)
    Spotify.savePlaylist(this.state.playlistName, trackUris)
    this.setState({ playlistName: 'New Playlist', playlistTracks: [] })
  }

  handleSearch (term) {
    Spotify.search(term).then(searchResults => {
      this.setState({ searchResults: searchResults })
    })
  }

  render () {
    return (
      <div>
        <h1>Play<span className='highlight'>Time</span></h1>
        <div className='App'>
          <SearchBar onSearch={this.handleSearch} />
          <div className='App-playlist'>
            <SearchResults onAdd={this.handleOnAdd} searchResults={this.state.searchResults} />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onNameChange={this.handleOnNameChange}
              onSave={this.handleOnSave}
              onRemove={this.handleOnRemove}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
