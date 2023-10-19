import React from 'react';
import HomeNav from '@/components/HomeNav';
import ProfileHero from '@/components/ProfileHero';

const Profile = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center border-b border-gray-600 mx-2">
        <HomeNav />
      </div>
      <ProfileHero/>
    </div>
  )
}
export default Profile
