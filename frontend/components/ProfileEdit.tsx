import React from 'react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const formSchema = z.object({
  FullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  Email: z.string().email({
    message: "Please enter a valid Email address.",
  }),
  ContactNumber: z.string().min(10, {
    message: "Contact number must be at least 10 digits.",
  }),
  Education: z.string().min(2, {
    message: "Please enter your Educational background.",
  }),
  CareerGoals: z.string().min(2, {
    message: "Please enter your career goals.",
  }),
  Interests: z.string().min(2, {
    message: "Please enter your Interests.",
  }),
  Skills: z.string().min(2, {
    message: "Please enter your Skills.",
  }),
  WorkExperience: z.string().min(2, {
    message: "Please enter your work experience.",
  }),
  LearningMethods: z.string().min(2, {
    message: "Please enter your preferred learning methods.",
  }),
})

const ProfileEdit = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      FullName: "",
      Email: "",
      ContactNumber: "",
      Education: "",
      CareerGoals: "",
      Interests: "",
      Skills: "",
      WorkExperience: "",
    },
  })
  function onSubmit() {
    console.log("form submitted")
  }
  type FormFieldName = "FullName" | "Email" | "Education" | "CareerGoals" | "Interests" | "Skills" | "WorkExperience";

  const placeholders = {
    FullName: "Please enter your full name here",
    Email: "Please enter your email here",
    Education: "Please enter your educational background here",
    CareerGoals: "Please enter your career goals here",
    Interests: "Please enter your interests here",
    Skills: "Please enter your skills here",
    WorkExperience: "Please enter your work experience here",
  };

  const renderField = (name: FormFieldName, label: string) => (
    <div className="w-full md:w-1/2 px-2 mb-4">
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input placeholder={placeholders[name]} {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  )

  return (
    <div className='mt-10 flex justify-center min-h-screen'>
      <div className="w-full md:max-w-6xl p-8 mx-auto bg-secondary rounded-xl shadow-md space-y-4 text-primary">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-16">
            <div className="flex flex-wrap">
              {renderField("FullName", "Full Name")}
              {renderField("Email", "Email")}
            </div>
            <div className="flex flex-wrap">
              {renderField("CareerGoals", "Career Goals")}
              {renderField("Education", "Education")}
            </div>
            {renderField("Interests", "Interests")}
            {renderField("Skills", "Skills")}
            {renderField("WorkExperience", "Work Experience")}
            <div className="flex justify-center">
              <Button type="submit">Save</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>

  )
}

export default ProfileEdit