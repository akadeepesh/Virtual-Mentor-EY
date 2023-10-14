import React, { useState } from 'react';
// import Edit from '@/components/Edit';
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const ProfileHero = () => {
  const { user } = useUser();
  const hasImage = user?.hasImage;
  const profileImageUrl = user?.imageUrl;
  const [Username, setUsername] = useState("deepesh@0001");

  return (
    <div className='flex flex-row'>
      <div className="flex flex-col align-center">
        <Avatar className='h-40 w-40'>
          {hasImage ? (
            <AvatarImage src={profileImageUrl} alt="@UserImage"/>
            ) : (
              <AvatarImage src="\images\DC.png" alt="@UserImage"/>
            )}
        </Avatar>
        <div className="">{user?.fullName}</div>
        <div className="">{Username}</div>
        {/* <div className=""><Edit/></div> */}
      </div>
      <div className="flex justify-evenly">
        <Card>
          <CardHeader>
            <CardTitle>Badges</CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
          </CardHeader>
          <CardContent>
            <p>Badges Showcase</p>
          </CardContent>
          <CardFooter>
            <p>Current Level</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Badges</CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
          </CardHeader>
          <CardContent>
            <p>Badges Showcase</p>
          </CardContent>
          <CardFooter>
            <p>Current Level</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Badges</CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
          </CardHeader>
          <CardContent>
            <p>Badges Showcase</p>
          </CardContent>
          <CardFooter>
            <p>Current Level</p>
          </CardFooter>
        </Card>
      </div>
      {/* <div className='w-7/10'>
        <div className='badges'>Badges</div>
        <div className='education'>Education</div>
        <div className='skills'>Skills</div>
        <div className='interests'>Interests</div>
      </div> */}
    </div>
  )
}

export default ProfileHero;
