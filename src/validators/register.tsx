// app/cadastro/schemas.js
import { z } from 'zod';

export const step1Schema = z.object({
    name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
    email: z.string().email('E-mail inválido'),
    password: z.string().min(6, 'Necessário mínimo 6 caracteres')
});

export const step2Schema = z.object({
    address: z.string().min(5, 'O endereço deve ter pelo menos 5 caracteres'),
    city: z.string().min(2, 'A cidade deve ter pelo menos 2 caracteres')
});
