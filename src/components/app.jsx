import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "cEYFeDKVPTmRgIG9fmo"
    };

    this.search("homer")
  }

  search = (query) => {
    giphy('nEkyjMV3qNGpxobOb9rYEFKcn4p15oCt').search({
      q: 'pokemon',
      rating: 'g'
    }, function (err, res) {
      console.log(res);
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
