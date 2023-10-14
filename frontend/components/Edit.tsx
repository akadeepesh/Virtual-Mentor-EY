import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Combobox from '@/components/Combobox';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Coloumn = (id: string , value: string, Title : string) => (
  <div className="grid grid-cols-4 items-center gap-4">
    <Label htmlFor={id} className="text-right">
      {Title}
    </Label>
    <Input id={id} value={value} className="col-span-3" />
  </div>
)

const languages = [
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "Telugu",
    label: "Andhra Pradesh",
  },
  {
    value: "Arunachali",
    label: "Arunachal Pradesh",
  },
  {
    value: "Assamese", //Bodo
    label: "Assam",
  },
  {
    value: "Bengali",
    label: "West Bengal",
  },
  {
    value: "Dogri", //Kashmiri, sindhi, urdu
    label: "Jammu and Kashmir",
  },
  {
    value: "Gujarati",
    label: "Gujarat",
  },
  {
    value: "Hindi",
    label: "Haryana",
  },
  // {
  //   value: "Hindi",
  //   label: "Himachal Pradesh",
  // },
  {
    value: "Kannada",
    label: "Karnataka",
  },
  {
    value: "Konkani",
    label: "Goa",
  },
  {
    value: "Maithili",
    label: "Bihar",
  },
  {
    value: "Malayalam",
    label: "Kerala",
  },
  {
    value: "Manipuri",
    label: "Manipur",
  },
  {
    value: "Marathi",
    label: "Maharashtra",
  },
  {
    value: "Nepali",
    label: "Sikkim",
  },
  {
    value: "Odia",
    label: "Odisha",
  },
  {
    value: "Punjabi",
    label: "Punjab",
  },
  {
    value: "Sanskrit",
    label: "Uttarakhand",
  },
  {
    value: "Santali",
    label: "Jharkhand",
  },
  {
    value: "Tamil",
    label: "Tamil Nadu",
  },
  // {
  //   value: "Telugu",
  //   label: "Telangana",
  // },
]


const Edit = () => {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={'outline'}>Edit</Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            {Coloumn("name", "Deepesh Kumar", "Name")}
            {Coloumn("username", "@deepesh0001", "Username")}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">
                Skills
              </Label>
              <Combobox Options={languages}/> 
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
  )
}  
export default Edit