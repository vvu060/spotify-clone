export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "8b24567063a64f0fa20336dc4d56f7d3";

// Defines user scope (things a user can do)
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      //http://localhost:3000/#access_token=BQChta5Y6Ortk7-0VbbeDdHlBU-UVGP_BTJROakPNPdlJjglFns1kw4RqvLU-rEj-kHOiCQtxQSD2IoifYVVVyWF8CfvJJuSpVvg_GRdv7wPfPvb4M4Se4ghus4CDEr8gdpJ6-V_sC9cCDEIpiFECTbBgj4Pq6wqhAt8JLl1Z01D07B0wBpZ&token_type=Bearer&expires_in=3600
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
