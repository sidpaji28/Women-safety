import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import { useNavigate } from "react-router-dom";

const Videos = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("All");

  // List of video files relative to the public or src folder
  const videos = ["/src/videos/vid1.mp4", "/src/videos/vid2.mp4"];

  return (
    <div>
      <div className="flex flex-col justify-between p-4 text-lg font-semibold bg-orange-400 text-white pb-2">
        <div className="flex justify-between mb-5">
          <i className="ri-menu-line"></i>
          <p>Videos</p>
          <i className="ri-notification-3-line"></i>
        </div>
        <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="flex gap-5">
            {["All"].map(
              (tab) => (
                <p
                  key={tab}
                  className={`cursor-pointer pb-2 ${
                    activeTab === tab ? "border-b-4 border-white" : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </p>
              )
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center p-4 pl-4 ml-4">
        {videos.length > 0 ? (
          videos.map((video, index) => (
            <video
              key={index}
              controls
              className="rounded-xl shadow-md p-1"
              style={{ width: "300px", height: "500px", objectFit: "cover" }}
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))
        ) : (
          <div className="text-center mt-10">No videos available</div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 w-full flex justify-center gap-10 bg-orange-400 p-3 text-white text-center">
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

export default Videos;
