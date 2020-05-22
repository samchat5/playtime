import React from 'react'
import './Track.css'

class Track extends React.Component {
  constructor (props) {
    super(props)
    this.handleAddTrack = this.handleAddTrack.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  renderAction () {
    if (this.props.isRemoval) {
      return <button onClick={this.handleOnClick} className='Track-action'>-</button>
    } else {
      return <button onClick={this.handleAddTrack} className='Track-action'>+</button>
    }
  }

  handleAddTrack () {
    this.props.onAdd(this.props.track)
  }

  handleOnClick () {
    this.props.onRemove(this.props.track)
  }

  render () {
    return (
      <div className='Track'>
        <div className='Track-information'>
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        {this.renderAction()}
      </div>
    )
  }
}

export default Track
