// app/cadastro/step1.js
'use client';
import { useRegister } from '@/context/registerContext';
import { step1Schema } from '@/validators/register';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Step1() {
    const { formData, setFormData } = useRegister();
    const router = useRouter();

    const [errors, setErrors] = useState({ name: '', email: '', password: '' });

    const handleNext = () => {
        const result = step1Schema.safeParse(formData);
        if (!result.success) {
            // Coleta e formata os erros
            const formattedErrors = result.error.format();
            setErrors({
                name: formattedErrors.name?._errors?.[0] || '',
                email: formattedErrors.email?._errors?.[0] || '',
                password: formattedErrors.password?._errors?.[0] || '',
            });
            return;
        }

        // Sem erros -> pode avançar
        setErrors({ name: '', email: '', password: '' });
        router.push('/register/step2');
    };


    return (
        <div className='flex flex-col max-w-xl bg-blue-50 p-5 m-5 '>
            <h2>Etapa 1 - Dados Pessoais</h2>
            <input
                className='my-2 bg-white h-9 p-2 rounded-2xl'
                type="text"
                placeholder="Nome"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
            <input
                className='my-2 bg-white h-9 p-2 rounded-2xl'
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            <input
                className='my-2 bg-white h-9 p-2 rounded-2xl'
                type="text"
                placeholder="Senha"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            <button className='w-auto bg-blue-700 text-white my-3 rounded-2xl h-9' onClick={handleNext}>Próximo</button>
        </div>
    );
}
