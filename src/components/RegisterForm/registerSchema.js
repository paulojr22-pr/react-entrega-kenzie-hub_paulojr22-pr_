import { z } from "zod";

export const registerSchema = z.object({
    name: z
    
        .string()
        .min(1, "*Campo obrigatório"),
    email: z

        .string()
        .min(1, "*Campo obrigatório")
        .email("Insira um email válido"),
    password: z

        .string()
        .min(1, "*Campo obrigatório")
        .min(8, "É necessário pelo menos 8 dígitos")
        .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
        .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
        .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
        .regex(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caractere especial"),

    confirmPassword: z
        .string()
        .min(1, "*Campo obrigatório")
    ,
    bio: z
        .string()
        .min(1, "*Campo obrigatório"),

    contact: z
        .string()
        .min(11, "Insira um telefone valido")
        .max(11, "Insira um telefone valido"),
    course_module: z
        .string()
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas devem ser iguais",
    path: ["confirmPassword"]
}).refine(({course_module}) => course_module != "Selecione o seu módulo", {
    message: "Selecione uma opção válida",
    path: ["course_module"]
})