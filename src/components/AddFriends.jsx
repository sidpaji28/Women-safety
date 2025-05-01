import React, { useState } from 'react'

const AddFriends = (props) => {
  
  const [activeTab , setActiveTab] = useState('SOS Contacts');
  
  const contacts = [
    { name: 'Rohan Verma', phone: '+91-8475009689' },
    { name: 'Kartik Sharma', phone: '+91-8475009689' },
    { name: 'Varun Dayal', phone: '+91-8475009689' },
    { name: 'Cherish Dahiya', phone: '+91-8475009689' },
    { name: 'Aditya Garg', phone: '+91-8475009689' },
    { name: 'Siddharth Sharma', phone: '+91-8475009689' },
  ];

  return (
    <div>
      <div className='bg-orange-400 text-white pb-3'>
            <div className='flex gap-3 text-xl font-semibold'>
              <i onClick={() => {props.setAddFriends(false)}} className="ri-arrow-down-wide-line"></i>
              <p>Friends</p>
            </div>
      
            <div className='flex justify-evenly mt-5 text-sm font-semibold'>
              {['SOS Contacts' , 'Friends' , 'Requests'].map((tab) => (
                <p key={tab} className={`cursor-pointer pb-2 ${activeTab === tab ? 'border-b-4 border-white' : ''}`} onClick={() => setActiveTab(tab)}>
                    {tab}
                </p>
              ))}
            </div>
        </div>

        <div className='mt-2'>
        {contacts.map((contact, index) => (
          <div key={index} className='flex mb-2'>
            <div className='w-[12%] mr-2'>
              <img 
                src="https://th.bing.com/th/id/OIP.ueWoSOP2NBNORHxxLiuXxQHaHa?w=164&h=180&c=7&r=0&o=5&pid=1.7" 
                alt="profile" 
              />
            </div>
            <div>
              <p className='text-sm font-semibold'>{contact.name}</p>
              <p className='text-xs font-semibold'>{contact.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AddFriends