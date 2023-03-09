import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>404 - Page Not Found</h1>
        <p>Uh oh, it looks like you took a wrong turn!</p>
        <p>
          Why not help this puppy <Link to="/">home</Link> and try again
          instead?
        </p>
        <img
          src="https://media.giphy.com/media/3o6ZtaO9BZHcOjmErm/giphy.gif"
          alt="Lost dog"
        />
      </header>
    </div>
  );
}

export default NotFoundPage;
