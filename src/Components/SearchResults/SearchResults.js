import React from 'react'
import './SearchResults.css'
import TrackList from '../TrackList/TrackList.js'

class SearchResults extends React.Component {
  render () {
    return (
      <div className='SearchResults'>
        <h2 className='card-header' style={{ textAlign: 'center' }}>Results</h2><hr />
        <TrackList isRemoval={false} onAdd={this.props.onAdd} tracks={this.props.searchResults} />
      </div>
    )
  }
}

export default SearchResults
