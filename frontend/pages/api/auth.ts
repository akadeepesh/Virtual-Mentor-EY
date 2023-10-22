import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email(),
  first_name: z
    .string()
    .min(3, { message: "Your first name should not be that short!" })
    .max(255),
  last_name: z
    .string()
    .min(3, { message: "Your last name should not be that short!" })
    .max(255),
  username: z
  .string()
  .min(5, { message: "Your username should be at least 5 characters long"})
  .max(50),
  gender: z.string().min(2).max(10),
  password: z.string().min(6).max(100),
  confirmPassword: z.string().min(6).max(100),
});