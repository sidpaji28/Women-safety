import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const VoiceRecord = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const navigate = useNavigate();

  const handleStartRecording = async () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert("Your browser does not support audio recording.");
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });
        const url = URL.createObjectURL(audioBlob);
        setAudioURL(url);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (err) {
      alert("Could not start recording: " + err.message);
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center p-4">
      <h2 className="text-2xl font-semibold mb-6">Voice Recorder</h2>
      <div>
        {!isRecording && (
          <button
            onClick={handleStartRecording}
            className="bg-orange-400 text-white px-6 py-3 rounded-lg text-lg font-semibold"
          >
            Start Recording
          </button>
        )}
        {isRecording && (
          <button
            onClick={handleStopRecording}
            className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold"
          >
            Stop Recording
          </button>
        )}
      </div>
      {audioURL && (
        <div className="mt-6">
          <audio controls src={audioURL} />
        </div>
      )}
      <div className="fixed bottom-0 left-0 w-full flex justify-center gap-10 bg-orange-400 p-3 text-white text-center mt-10">
        <div
          onClick={() => {
            navigate("/user-home");
          }}
          className="focus:outline-none focus:ring-2 focus:ring-white rounded-md pr-1 pl-1"
          tabIndex="0"
        >
          <i className="ri-home-9-line"></i>
          <p>Home</p>
        </div>
        <div
          onClick={() => {
            navigate("/voice-record");
          }}
          className="focus:outline-none focus:ring-2 focus:ring-white rounded-md pr-1 pl-1"
          tabIndex="0"
        >
          <i className="ri-mic-line"></i>
          <p>Record</p>
        </div>
        <div
          onClick={() => {
            navigate("/helpline");
          }}
          className="focus:outline-none focus:ring-2 focus:ring-white rounded-md pr-1 pl-1"
          tabIndex="0"
        >
          <i className="ri-questionnaire-line"></i>
          <p>Helpline</p>
        </div>
        <div
          onClick={() => {
            navigate("/videos");
          }}
          className="focus:outline-none focus:ring-2 focus:ring-white rounded-md pr-1 pl-1"
          tabIndex="0"
        >
          <i className="ri-file-video-line"></i>
          <p>Videos</p>
        </div>
      </div>
    </div>
  );
};

export default VoiceRecord;
