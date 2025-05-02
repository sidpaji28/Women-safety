import React, { useState } from 'react';

const AddFriends = (props) => {
  const [activeTab, setActiveTab] = useState('SOS Contacts');
  const contacts = [
    { name: 'Rohan Verma', phone: '+91-8475009689' },
    { name: 'Kartik Sharma', phone: '+91-8475009689' },
    { name: 'Varun Dayal', phone: '+91-8475009689' },
    { name: 'Cherish Dahiya', phone: '+91-8475009689' },
    { name: 'Aditya Garg', phone: '+91-8475009689' },
    { name: 'Siddharth Sharma', phone: '+91-8475009689' },
  ];

  // SVG Icons
  const Icons = {
    Close: () => (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    ),
    User: () => (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
    Phone: () => (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
    Shield: () => (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    Bell: () => (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      </svg>
    ),
    UserPlus: () => (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="8.5" cy="7" r="4"></circle>
        <line x1="20" y1="8" x2="20" y2="14"></line>
        <line x1="23" y1="11" x2="17" y2="11"></line>
      </svg>
    )
  };

  const tabIcons = {
    'SOS Contacts': <Icons.Shield />,
    'Friends': <Icons.User />,
    'Requests': <Icons.Bell />
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center sm:items-center">
      <div className="bg-white w-full max-w-lg rounded-t-xl sm:rounded-xl shadow-xl overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">Friends</h2>
          <button 
            onClick={() => props.setAddFriends(false)} 
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Icons.Close />
          </button>
        </div>
        
        <div className="px-2">
          <div className="flex border-b">
            {['SOS Contacts', 'Friends', 'Requests'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? 'text-orange-600 border-b-2 border-orange-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <span className="mr-2">{tabIcons[tab]}</span>
                {tab}
              </button>
            ))}
          </div>
        </div>
        
        <div className="max-h-96 overflow-y-auto p-4">
          {contacts.map((contact, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-3 mb-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center">
                <div className="bg-orange-100 p-2 rounded-full text-orange-600 mr-3">
                  <Icons.User />
                </div>
                <div>
                  <p className="font-medium text-gray-800">{contact.name}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-1"><Icons.Phone /></span>
                    {contact.phone}
                  </div>
                </div>
              </div>
              <button className="bg-orange-50 hover:bg-orange-100 text-orange-600 p-2 rounded-full transition-colors">
                <Icons.UserPlus />
              </button>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t bg-gray-50">
          <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
            Add New Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddFriends;