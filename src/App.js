import React, { Component } from "react";
import MoviesList from './components/MoviesList';

class App extends Component {
  render() {
    return (
        <div>
          <h4>My React App is working!</h4>
            <MoviesList />
        </div>
    );
  }
}

export default App;