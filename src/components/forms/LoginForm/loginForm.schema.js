import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email().min(1, "Esse campo é obrigatório"),
  password: z.string().min(1, "Esse campo é obrigatório"),
});
