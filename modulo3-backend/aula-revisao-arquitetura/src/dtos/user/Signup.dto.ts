import z from "zod";

export interface SignupInputDTO {
  name: string;
  email: string;
  password: string;
}

export interface SignupOutputDTO {
  token: string;
}

export const UserSignupSchema = z
  .object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(4),
  })
  .transform((date) => date as SignupInputDTO);
