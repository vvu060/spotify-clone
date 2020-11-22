import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import spotifyWebApi from "spotify-web-api-js"; //its a wrapper around spotify API for easy use.
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotyify = new spotifyWebApi();

function App() {
  //const [token, setToken] = useState(null);

  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""; // Hides the access token
    //console.log('Token:', hash);
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotyify.setAccessToken(_token);

      spotyify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotyify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotyify.getPlaylist("37i9dQZEVXcIJazRV9ISoM").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }
  }, []);

  //console.log("User:", user);
  //console.log("Token", token);

  return (
    <div className="app">
      {token ? <Player spotyify={spotyify} /> : <Login />}
    </div>
  );
}

export default App;
