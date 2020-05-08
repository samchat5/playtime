let accessToken
const redirectUri = 'http://localhost:3000/'
const clientID = 'ca66d55317b74fd5b3348d9ce74c1765'

const Spotify = {
  getAccessToken () {
    if (accessToken) {
      return accessToken
    }
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1]
      const expiresIn = Number(expiresInMatch[1])
      window.setTimeout(() => { accessToken = '' }, expiresIn * 1000)
      window.history.pushState('Access Token', null, '/')
      return accessToken;
    } else {
      window.location.replace(`https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`)
    }
  },

  search (term) {
    const token = this.getAccessToken()
    return (
      // eslint-disable-next-line
      fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
        headers: { Authorization: `Bearer ${token}` }
      }).then(response => response.json()).then(jsonResponse => {
        console.log(jsonResponse)
        if (!jsonResponse.tracks) {
          return []
        }
        return jsonResponse.tracks.items.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        }))
      })
    )
  },

  savePlaylist (name, trackUris) {
    if (!name || !trackUris.length) {
      return
    }
    const accessToken = this.getAccessToken()
    const headers = { Authorization: `Bearer ${accessToken}` }
    let userID
    // eslint-disable-next-line
    return fetch('https://api.spotify.com/v1/me', { headers: headers }).then(response => response.json()).then(jsonResponse => {
      userID = jsonResponse.id
      // eslint-disable-next-line
      return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({ name: name })
      }).then(response => response.json()).then(jsonResponse => {
        const playlistID = jsonResponse.id
        // eslint-disable-next-line
        return fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({ uris: trackUris })
        })
      })
    })
  }
}

export default Spotify
