import React from 'react';
import Edit from '@/components/Edit';
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";

const ProfileHero = () => {
  const { user } = useUser();
  const hasImage = user?.hasImage;
  const profileImageUrl = user?.imageUrl;

  return (
    <div className='flex flex-row'>
      <div className="">{user?.fullName}</div>
      <Avatar>
        {hasImage ? (
          <AvatarImage src={profileImageUrl} alt="@UserImage"/>
        ) : (
          <AvatarImage src="\images\DC.png" alt="@UserImage"/>
        )}
      </Avatar>
      <Edit/>
    </div>
  )
}

export default ProfileHero;
