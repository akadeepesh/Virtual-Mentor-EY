import React from 'react';
import Edit from '@/components/Edit';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";

const ProfileHero = () => {
  const { user } = useUser();
  const profileImageUrl = user?.imageUrl;

  return (
    <div className='flex flex-row'>
      <Avatar>
        {profileImageUrl ? (
          <AvatarImage src={profileImageUrl} alt="@UserImage"/>
        ) : (
          <AvatarFallback>CN</AvatarFallback>
        )}
      </Avatar>
      <Edit/>
    </div>
  )
}

export default ProfileHero;
