import React, { useState } from "react";
import Edit from "@/components/Edit";
import AddNew from "@/components/AddNew";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";

const ProfileHero = () => {
  const { user } = useUser();
  const [isLangEdit, setIsLangEdit] = useState(false);
  const [isEduEdit, setIsEduEdit] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row max-w-screen-lg w-screen mx-auto gap-10 mt-10">
      <div className="flex flex-col align-center items-center gap-5">
        <Avatar className="h-40 w-40">
          {user?.hasImage ? (
            <AvatarImage src={user.imageUrl} alt="@UserImage" />
          ) : (
            <AvatarImage src="\images\DC.png" alt="@UserImage" />
          )}
        </Avatar>
        <div className="text-lg">
          <div className="">{user?.fullName}</div>
          <div className="">@{user?.username}</div>
          <div className="text-sm">
            {user?.primaryEmailAddress?.emailAddress}
          </div>
        </div>
        <Edit />
      </div>
      <div className="flex flex-col w-full gap-10">
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between">
              <div>Badges</div>
              <div>
                <AddNew />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">No Current Badges</p>
          </CardContent>
          <CardFooter>
            <Badge>"Current Level"</Badge>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between">
              <div>Skills</div>
              <div>
                <AddNew />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">No Skills Present</p>
          </CardContent>
          <CardFooter>
            <Badge>Skill List</Badge>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between">
              <div>Language</div>
              <div>
                <AddNew />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isLangEdit ? (
              <Input type="text" placeholder="Add Language" />
            ) : (
              <p className="text-muted-foreground rounded-lg">
                No Languages Added
              </p>
            )}
          </CardContent>
          <CardFooter>
            <Toggle onClick={() => setIsLangEdit(!isLangEdit)}>Edit</Toggle>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between">
              <div>Education</div>
              <div>
                <AddNew />
              </div>
            </CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
          </CardHeader>
          <CardContent>
            {isEduEdit ? (
              <Input type="text" placeholder="Add Education" />
            ) : (
              <p className="text-muted-foreground rounded-lg">
                No Education Added
              </p>
            )}
          </CardContent>
          <CardFooter>
            <Toggle onClick={() => setIsEduEdit(!isEduEdit)}>Edit</Toggle>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ProfileHero;
