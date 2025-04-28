import React from 'react';

export default function Playlistdisplay() {
  // Placeholder playlist data
  const playlists = [
    { id: 1, name: 'Chill Vibes' },
    { id: 2, name: 'Workout Hits' },
    { id: 3, name: 'Top 50' },
  ];

  return (
    <div>
      <h2>Your Playlists</h2>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id}>{playlist.name}</li>
        ))}
      </ul>
    </div>
  );
}
