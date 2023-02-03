import React, { Component } from "react";
import SongCard from "./components/SongCard";
import songs from "./services/songs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [...songs],
    };
  }
  handleSortingByTitle = () => {
    return this.setState([
      ...this.state.songs.sort((a, b) =>
        a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1
      ),
    ]);
  };

  handleSortingByRating = () => {
    return this.setState([
      ...this.state.songs.sort((a, b) => b.rating - a.rating),
    ]);
  };

  render() {
    return (
      <div id="super-tunes">
        <h2 id="st-title">SuperTunes - Songs of the Week</h2>
        {/* Buttons */}
        <div>
          <button className="st-btn" onClick={this.handleSortingByTitle}>
            Sort By Title
          </button>
          <button className="st-btn" onClick={this.handleSortingByRating}>
            Sort By Rating
          </button>
        </div>
        {/* Song Card */}
        {this.state.songs.map((song, id) => {
          return (
            <SongCard
              title={song.title}
              artist={song.artist}
              thumb={song.thumb}
              rating={song.rating}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
