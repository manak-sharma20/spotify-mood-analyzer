import axios from 'axios';

const clientId = 'e80eeaacb1ce463792904be9f1631212';
const clientSecret = '1bd318bb5c66436897df526e8ec7f07d';

export const getSpotifyAccessToken = async () => {
  const authString = btoa(`${clientId}:${clientSecret}`);
  
  const response = await axios.post(
    'https://accounts.spotify.com/api/token',
    new URLSearchParams({ grant_type: 'client_credentials' }),
    {
      headers: {
        Authorization: `Basic ${authString}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );

  return response.data.access_token;
};
