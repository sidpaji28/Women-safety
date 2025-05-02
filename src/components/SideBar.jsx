import React from "react";

const content = [
  { icon: "ri-user-line", page: "Profile" },
  { icon: "ri-settings-3-line", page: "Setting" },
  { icon: "ri-group-line", page: "Friend" },
  { icon: "ri-chat-history-line", page: "SOS History" },
  { icon: "ri-book-shelf-line", page: "Video Library" },
  { icon: "ri-questionnaire-line", page: "Help" },
  { icon: "ri-information-line", page: "App-Info" },
  { icon: "ri-feedback-line", page: "Feedback" },
  { icon: "ri-logout-box-line", page: "Logout" },
];
const SideBar = (props) => {
  return (
    <div>
      <div className="flex">
        <button
          onClick={() => {
            props.setSideBar(false);
          }}
        >
          <i className="ri-arrow-left-wide-line text-3xl font-bold text-orange-300"></i>
        </button>
        <h2 className="text-3xl text-orange-400 font-bold">HaloWatch</h2>
      </div>
      <div className="mt-3">
        {content.map((val, index) => (
          <div
            key={index}
            className="flex gap-5 text-lg font-semibold bg-gray-50 rounded-lg border mb-2"
          >
            <i className={val.icon}></i>
            <p>{val.page}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
