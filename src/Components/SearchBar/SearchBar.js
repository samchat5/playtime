import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = { term: '' }
    this.handleTermChange = this.handleTermChange.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick () {
    this.props.onSearch(this.state.term)
  }

  handleTermChange (event) {
    this.setState({ term: event.target.value })
  }

  render () {
    return (
      <div className='SearchBar'>
        <input onChange={this.handleTermChange} placeholder='Enter A Song, Album, or Artist' />
        <button className='SearchButton' onClick={this.handleOnClick}>SEARCH</button>
      </div>
    )
  }
}

export default SearchBar
