import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { registerSchema } from "@/pages/api/auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const inter = Inter({ subsets: ["latin"] });
type Input = z.infer<typeof registerSchema>;

export default function Home() {
  const { user } = useUser();
  const { toast } = useToast();
  const [formStep, setFormStep] = React.useState(0);
  const form = useForm<Input>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      confirmPassword: "",
      email: String(user?.emailAddresses),
      name: String(user?.fullName),
      password: "",
      studentId: "",
    },
  });

  function onSubmit(data: Input) {
    if (data.confirmPassword !== data.password) {
      toast({
        title: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }
    alert(JSON.stringify(data, null, 4));
    console.log(data);
  }


  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card className="md:w-[600px] sm:w-[400px]">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Start the journey with us today.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="relative space-y-3 overflow-x-hidden"
            >
              <motion.div
                className={cn("space-y-3", {
                  // hidden: formStep == 1,
                })}
                // formStep == 0 -> translateX == 0
                // formStep == 1 -> translateX == '-100%'
                animate={{
                  translateX: `-${formStep * 110}%`,
                }}
                transition={{
                  ease: "easeInOut",
                }}
              >
                {/* name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full name</FormLabel>
                      <FormControl>
                        <Input className="ml-1 w-[95%]" placeholder="Enter your name..." {...field}/>
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input className="ml-1 w-[95%]" placeholder="Enter your email..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* student id */}
                <FormField
                  control={form.control}
                  name="studentId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Student ID</FormLabel>
                      <FormControl>
                        <Input className="ml-1 w-[95%]"
                          placeholder="Enter your student id..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
              <motion.div
                className={cn("space-y-3 absolute top-0 left-0 right-0", {
                  // hidden: formStep == 0,
                })}
                // formStep == 0 -> translateX == 100%
                // formStep == 1 -> translateX == 0
                animate={{
                  translateX: `${110 - formStep * 110}%`,
                }}
                style={{
                  translateX: `${100 - formStep * 100}%`,
                }}
                transition={{
                  ease: "easeInOut",
                }}
              >
                {/* password */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input className="ml-1 w-[95%]"
                          placeholder="Enter your password..."
                          {...field}
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* confirm password */}
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm password</FormLabel>
                      <FormControl>
                        <Input className="ml-1 w-[95%]"
                          placeholder="Please confirm your password..."
                          {...field}
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
              <div className="flex gap-2">
                <Button
                  type="submit"
                  className={cn({
                    hidden: formStep == 0,
                  })}
                >
                  Submit
                </Button>
                <Button
                  type="button"
                  variant={"ghost"}
                  className={cn({
                    hidden: formStep == 1,
                  })}
                  onClick={() => {
                    // validation
                    form.trigger(["email", "name", "studentId"]);
                    const emailState = form.getFieldState("email");
                    const nameState = form.getFieldState("name");
                    const idState = form.getFieldState("studentId");
                    if (!emailState.isDirty || emailState.invalid) return;
                    if (!nameState.isDirty || nameState.invalid) return;
                    if (!idState.isDirty || idState.invalid) return;

                    setFormStep(1);
                  }}
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  type="button"
                  variant={"ghost"}
                  onClick={() => {
                    setFormStep(0);
                  }}
                  className={cn({
                    hidden: formStep == 0,
                  })}
                >
                  Go Back
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}