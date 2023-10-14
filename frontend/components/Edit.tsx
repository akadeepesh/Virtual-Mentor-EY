import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Combox from '@/components/Combox';
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

const Edit = () => {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={'outline'}>Edit</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            {Coloumn("name", "Deepesh Kumar", "Name")}
            {Coloumn("username", "@deepesh001", "Username")}
            <div className="flex flex-row">
              <Label className="text-right">
                Skills
              </Label>
              <Combox/>
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