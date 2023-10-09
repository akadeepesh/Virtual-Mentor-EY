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

const ProfileHero = () => {
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
          LearningMethods: "",
        },
      })
      function onSubmit() {
        console.log("form submitted")
      }
      type FormFieldName = "FullName" | "Email" | "ContactNumber" | "Education" | "CareerGoals" | "Interests" | "Skills" | "WorkExperience" | "LearningMethods";

      const renderField = (name: FormFieldName, label: string, description: string) => (
        <div className="w-full md:w-1/2 px-2 mb-4">
          <FormField
              control={form.control}
              name={name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{label}</FormLabel>
                  <FormControl>
                    <Input placeholder={name} {...field} />
                  </FormControl>
                  <FormDescription>
                    {description}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
        </div>
      )
      
      return (
        <div className='mt-10 flex justify-center items-center min-h-screen text-white'>
          <div className="w-full md:max-w-4xl p-8 mx-auto bg-gray-900 rounded-xl shadow-md space-y-4 text-gray-900">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="flex flex-wrap">
                  {renderField("FullName", "Full Name", "Enter your full name.")}
                  {renderField("Email", "Email", "Enter your Email address.")}
                </div>
                <div className="flex flex-wrap">
                  {renderField("CareerGoals", "Career Goals", "Enter your career goals.")}
                  {renderField("Education", "Education", "Enter your Educational background.")}
                </div>
                {renderField("Interests", "Interests", "Enter your Interests.")}
                {renderField("Skills", "Skills", "Enter your Skills.")}
                {renderField("WorkExperience", "Work Experience", "Enter your work experience.")}
                {renderField("LearningMethods", "Learning Methods", "Enter your preferred learning methods.")}
                <div className="flex justify-center">
                  <Button type="submit">Submit</Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      )
}      

export default ProfileHero
