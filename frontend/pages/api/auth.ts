import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email(),
  first_name: z
    .string()
    .min(3, { message: "Your name should not be that short!" })
    .max(255),
  studentId: z
    .string()
    .min(7)
    .max(7)
    .refine((val) => !isNaN(val as unknown as number), {
      message: "Student ID should be a number",
    }),
  username: z
  .string()
  .min(5, { message: "Your username should be at least 5 characters long"})
  .max(50),
  gender: z
  .string()
  .min(2, { message: "Your pronouns can't be less than 2 characters"})
  .max(10),
  password: z.string().min(6).max(100),
  confirmPassword: z.string().min(6).max(100),
});