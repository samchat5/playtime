(this.webpackJsonpplaytime=this.webpackJsonpplaytime||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),s=a(7),i=a.n(s),l=(a(13),a(2)),o=a(3),h=a(1),u=a(5),d=a(4),m=(a(14),a(15),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={term:""},n.handleTermChange=n.handleTermChange.bind(Object(h.a)(n)),n.handleOnClick=n.handleOnClick.bind(Object(h.a)(n)),n}return Object(o.a)(a,[{key:"handleOnClick",value:function(){this.props.onSearch(this.state.term)}},{key:"handleTermChange",value:function(e){this.setState({term:e.target.value})}},{key:"render",value:function(){return c.a.createElement("div",{className:"SearchBar"},c.a.createElement("input",{onChange:this.handleTermChange,placeholder:"Enter A Song, Album, or Artist"}),c.a.createElement("button",{className:"SearchButton",onClick:this.handleOnClick},"SEARCH"))}}]),a}(c.a.Component)),p=(a(16),a(17),a(18),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleAddTrack=n.handleAddTrack.bind(Object(h.a)(n)),n.handleOnClick=n.handleOnClick.bind(Object(h.a)(n)),n}return Object(o.a)(a,[{key:"renderAction",value:function(){return this.props.isRemoval?c.a.createElement("button",{onClick:this.handleOnClick,className:"Track-action"},"-"):c.a.createElement("button",{onClick:this.handleAddTrack,className:"Track-action"},"+")}},{key:"handleAddTrack",value:function(){this.props.onAdd(this.props.track)}},{key:"handleOnClick",value:function(){this.props.onRemove(this.props.track)}},{key:"render",value:function(){return c.a.createElement("div",{className:"Track"},c.a.createElement("div",{className:"Track-information"},c.a.createElement("h3",null,this.props.track.name),c.a.createElement("p",null,this.props.track.artist," | ",this.props.track.album)),this.renderAction())}}]),a}(c.a.Component)),v=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"TrackList"},this.props.tracks.map((function(t){return c.a.createElement(p,{track:t,key:t.id,onAdd:e.props.onAdd,isRemoval:e.props.isRemoval,onRemove:e.props.onRemove})})))}}]),a}(c.a.Component),f=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"SearchResults"},c.a.createElement("h2",{className:"card-header",style:{textAlign:"center"}},"Results"),c.a.createElement("hr",null),c.a.createElement(v,{isRemoval:!1,onAdd:this.props.onAdd,tracks:this.props.searchResults}))}}]),a}(c.a.Component),k=(a(19),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleNameChange=n.handleNameChange.bind(Object(h.a)(n)),n}return Object(o.a)(a,[{key:"handleNameChange",value:function(e){this.props.onNameChange(e.target.value)}},{key:"render",value:function(){return c.a.createElement("div",{className:"Playlist"},c.a.createElement("input",{onChange:this.handleNameChange,defaultValue:"New Playlist"}),c.a.createElement(v,{onRemove:this.props.onRemove,isRemoval:!0,tracks:this.props.playlistTracks}),c.a.createElement("button",{onClick:this.props.onSave,className:"Playlist-save"},"SAVE TO SPOTIFY"))}}]),a}(c.a.Component)),y={getAccessToken:function(){if(n)return n;var e=window.location.href.match(/access_token=([^&]*)/),t=window.location.href.match(/expires_in=([^&]*)/);if(e&&t){n=e[1];var a=Number(t[1]);return window.setTimeout((function(){n=""}),1e3*a),window.history.pushState("Access Token",null,"/"),n}window.location.replace("https://accounts.spotify.com/authorize?client_id=".concat("ca66d55317b74fd5b3348d9ce74c1765","&response_type=token&scope=playlist-modify-public&redirect_uri=").concat("http://localhost:3000/"))},search:function(e){var t=this.getAccessToken();return fetch("https://api.spotify.com/v1/search?type=track&q=".concat(e),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).then((function(e){return console.log(e),e.tracks?e.tracks.items.map((function(e){return{id:e.id,name:e.name,artist:e.artists[0].name,album:e.album.name,uri:e.uri}})):[]}))},savePlaylist:function(e,t){if(e&&t.length){var a,n=this.getAccessToken(),r={Authorization:"Bearer ".concat(n)};return fetch("https://api.spotify.com/v1/me",{headers:r}).then((function(e){return e.json()})).then((function(n){return a=n.id,fetch("https://api.spotify.com/v1/users/".concat(a,"/playlists"),{headers:r,method:"POST",body:JSON.stringify({name:e})}).then((function(e){return e.json()})).then((function(e){var a=e.id;return fetch("https://api.spotify.com/v1/playlists/".concat(a,"/tracks"),{headers:r,method:"POST",body:JSON.stringify({uris:t})})}))}))}}},O=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={searchResults:[],playlistName:"",playlistTracks:[]},n.handleOnAdd=n.handleOnAdd.bind(Object(h.a)(n)),n.handleOnRemove=n.handleOnRemove.bind(Object(h.a)(n)),n.handleOnNameChange=n.handleOnNameChange.bind(Object(h.a)(n)),n.handleOnSave=n.handleOnSave.bind(Object(h.a)(n)),n.handleSearch=n.handleSearch.bind(Object(h.a)(n)),n}return Object(o.a)(a,[{key:"handleOnAdd",value:function(e){this.state.playlistTracks.find((function(t){return t.id===e.id}))||(this.state.playlistTracks.push(e),this.setState({playlistTracks:this.state.playlistTracks}))}},{key:"handleOnRemove",value:function(e){this.setState({playlistTracks:this.state.playlistTracks.filter((function(t){return e.id!==t.id}))})}},{key:"handleOnNameChange",value:function(e){this.setState({playlistName:e})}},{key:"handleOnSave",value:function(){var e=this.state.playlistTracks.map((function(e){return e.uri}));y.savePlaylist(this.state.playlistName,e),this.setState({playlistName:"New Playlist",playlistTracks:[]})}},{key:"handleSearch",value:function(e){var t=this;y.search(e).then((function(e){t.setState({searchResults:e})}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Play",c.a.createElement("span",{className:"highlight"},"Time")),c.a.createElement("div",{className:"App"},c.a.createElement(m,{onSearch:this.handleSearch}),c.a.createElement("div",{className:"App-playlist"},c.a.createElement(f,{onAdd:this.handleOnAdd,searchResults:this.state.searchResults}),c.a.createElement(k,{playlistName:this.state.playlistName,playlistTracks:this.state.playlistTracks,onNameChange:this.handleOnNameChange,onSave:this.handleOnSave,onRemove:this.handleOnRemove}))))}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.e05e40e2.chunk.js.map