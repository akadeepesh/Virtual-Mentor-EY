import { Inter } from "next/font/google";
import Head from "next/head";
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
      // email: String(user?.emailAddresses), --fix
      email: "",
      // first_name: String(user?.firstName),
      first_name: "",
      // last_name: String(user?.lastName),
      last_name: "",
      username: "",
      password: "",
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
    console.log("form submitted");
    alert(JSON.stringify(data, null, 4));
    console.log(data);
  }

  type FormFieldName =
    | "email"
    | "first_name"
    | "last_name"
    | "username"
    | "gender"
    | "password"
    | "confirmPassword";

  function FormFieldGen(
    name: FormFieldName,
    label: string,
    placeholder: string,
    type: string = ""
  ) {
    return (
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input
                className="ml-1 w-[95%]"
                placeholder={placeholder}
                {...field}
                type={type}
                autoComplete="on"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }

  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Head>
        <title>Create your profile</title>
      </Head>
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
                {FormFieldGen(
                  "first_name",
                  "First Name",
                  "Enter your first name..."
                )}
                {FormFieldGen(
                  "last_name",
                  "Last Name",
                  "Enter your last name..."
                )}
                {FormFieldGen("username", "Username", "Enter your username...")}
                {FormFieldGen("email", "Email", "Enter your email...", "email")}
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
                {FormFieldGen(
                  "password",
                  "Password",
                  "Enter your password...",
                  "password"
                )}
                {FormFieldGen(
                  "confirmPassword",
                  "Confirm Password",
                  "Please confirm your password...",
                  "password"
                )}
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
                    form.trigger([
                      "email",
                      "first_name",
                      "last_name",
                      "username",
                    ]);
                    const emailState = form.getFieldState("email");
                    const firstName = form.getFieldState("first_name");
                    const lastName = form.getFieldState("last_name");
                    const userName = form.getFieldState("username");
                    if (!emailState.isDirty || emailState.invalid) return;
                    if (!firstName.isDirty || firstName.invalid) return;
                    if (!lastName.isDirty || lastName.invalid) return;
                    if (!userName.isDirty || userName.invalid) return;
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
