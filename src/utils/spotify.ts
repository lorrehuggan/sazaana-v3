import SpotifyWebApi from 'spotify-web-api-node';

/* Creating a new instance of the SpotifyWebApi class. */
export const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

const DEV_URL = process.env.DEV_URL;
const PROD_URL = process.env.PROD_URL;

export const loginURL = `https://accounts.spotify.com/authorize?client_id=1a98caa930f04397b79800309b24b9c5&response_type=code&redirect_uri=${PROD_URL}&scope=ugc-image-upload%20user-read-recently-played%20user-read-playback-state%20user-top-read%20app-remote-control%20playlist-modify-public%20user-modify-playback-state%20playlist-modify-private%20user-follow-modify%20user-read-currently-playing%20user-follow-read%20user-library-modify%20user-read-playback-position%20playlist-read-private%20user-read-email%20user-read-private%20user-library-read%20playlist-read-collaborative%20streaming&state${'x'}&show_dialog=true`;

export async function refreshAccessToken(token: any) {
  try {
    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshToken);
    const { body: refreshToken } = await spotifyApi.refreshAccessToken();

    return {
      ...token,
      accessToken: refreshToken.access_token,
      accessTokenExpires: Date.now() + refreshToken.expires_in * 1000,
      refreshToken: refreshToken.refresh_token ?? token.refreshToken,
    };
  } catch (error: any) {
    console.log(error);

    return {
      ...token,
      error: 'RefreshAccessTokenError',
    };
  }
}
