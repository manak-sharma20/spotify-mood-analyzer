import React from 'react';
import VoiceRecorder from './components/voicerecorder.jsx';
import Playlistdisplay from './components/Playlistdisplay.jsx';

export default function App() {
  const handleStopRecording = (recordedData) => {
    console.log('Recording stopped:', recordedData);
    // Here you can add logic to send the recorded audio to mood analyzer API or Spotify API
  };

  return (
    <div>
      <h1>Spotify Mood Analyzer</h1>
      <VoiceRecorder onStopRecording={handleStopRecording} />
      <Playlistdisplay />
    </div>
  );
}
