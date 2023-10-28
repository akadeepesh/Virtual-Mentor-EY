import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from 'react';
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Head from "next/head";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  skills: string;
  gender: string;
};

const Form = () => {
  const { user } = useUser();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    skills: '',
    gender: '',
  });
  const [section, setSection] = useState<number>(1);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  useEffect(() => {
    if (user) {
      setFormData((prevData) => ({
        ...prevData,
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.emailAddresses[0].emailAddress || '',
      }));
    }
  }, [user]);

  const handleNextClick = () => {
    if (section === 1) {
      const formErrors: Partial<FormData> = {};
      if (!formData.firstName.trim()) {
        formErrors.firstName = "First name can't be empty";
      }
      if (!formData.lastName.trim()) {
        formErrors.lastName = "Last name can't be empty";
      }
      if (!formData.email.trim()) {
        formErrors.email = "Email can't be empty";
      }
      if (Object.keys(formErrors).length === 0) {
        setErrors({});
        setSection(section + 1);
      } else {
        setErrors(formErrors);
      }
    } else {
      setSection(section + 1);
    }
  };

  const handlePreviousClick = () => {
    setSection(section - 1);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Your submission logic here
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        if (section === 1) {
          handleNextClick();
        } else if (section === 2) {
          const form = document.querySelector('form');
          if (form) {
            const formEvent = new Event('submit', { bubbles: true, cancelable: true });
            form.dispatchEvent(formEvent);
          }
        }
      } else if (event.key === 'Escape' && section === 2) {
        handlePreviousClick();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [section]);

  return (
    <div className="flex justify-center items-center">
      <Head>
        <title>Create your profile</title>
      </Head>
      <Card className="w-full md:w-[700px] sm:w-full">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Start the journey with us today.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleFormSubmit}>
            {section === 1 && (
              <div className="flex flex-col">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-1/2 pr-2">
                    <Label>First Name</Label>
                    <Input type="text" name="firstName" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                    {errors.firstName && <span className="text-red-400">{errors.firstName}</span>}
                  </div>
                  <div className="w-full md:w-1/2 pl-2">
                    <Label>Last Name</Label>
                    <Input type="text" name="lastName" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                    {errors.lastName && <span className="text-red-400">{errors.lastName}</span>}
                  </div>
                </div>
                <div className="mb-4">
                  <Label>Email</Label>
                  <Input type="text" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  {errors.email && <span className="text-red-400 text-sm">{errors.email}</span>}
                </div>
                <div className="justify-between">
                  <Button variant={"ghost"} onClick={handleNextClick}>Next</Button>
                </div>
              </div>
            )}

            {section === 2 && (
              <div className='flex flex-col'>
                <div className="mb-4">
                  <Label>Skills</Label>
                  <Input type="text" name="skills" onChange={(e) => setFormData({ ...formData, skills: e.target.value })} />
                </div>
                <div className="mb-4">
                  <Label>Gender</Label>
                  <Input type="text" name="gender" onChange={(e) => setFormData({ ...formData, gender: e.target.value })} />
                </div>
                <div className="flex justify-between">
                  <Button variant={"ghost"} onClick={handlePreviousClick}>Previous</Button>
                  <Button type="submit">Submit</Button>
                </div>
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Form;
