import { ReactMic } from 'react-mic';
import { useState } from 'react';

export default function VoiceRecorder({ onStopRecording }) {
  const [record, setRecord] = useState(false);

  const startRecording = () => {
    setRecord(true);
  };

  const stopRecording = () => {
    setRecord(false);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <ReactMic
        record={record}
        onStop={onStopRecording}
        mimeType="audio/wav"
        strokeColor="#000000"
        backgroundColor="#e3e3e3"
      />
      <div className="flex space-x-4">
        <button onClick={startRecording} className="px-4 py-2 bg-green-500 text-white rounded">Start</button>
        <button onClick={stopRecording} className="px-4 py-2 bg-red-500 text-white rounded">Stop</button>
      </div>
    </div>
  );
}
