'use client';
import { useRegister } from '@/context/registerContext';
import { step2Schema } from '@/validators/register';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Step2() {
    const { formData, setFormData } = useRegister();
    const router = useRouter();

    const [errors, setErrors] = useState({address: '', city: ''});

    const handleNext = () => {
        const result = step2Schema.safeParse(formData);
        if (!result.success) {
            const formattedErrors = result.error.format();
            setErrors({
                address: formattedErrors.address?._errors?.[0] || '',
                city: formattedErrors.city?._errors?.[0] || '',
            });
            return;
        }

        setErrors({address: '', city: ''});
        router.push('/register/step3');
    };

    const handleBack = () => {
        router.push('/register/step1');
    };

    return (
        <div  className='flex flex-col max-w-xl bg-blue-50 p-5 m-5 '>
            <h2>Etapa 2 - Endereço</h2>
            <input
                className='my-2 bg-white h-9 p-2 rounded-2xl'
                type="text"
                placeholder="Ex. Rua X, numero 10, bairro Feliz, cep 45200-123"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
             {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}

            <input
                className='my-2 bg-white h-9 p-2 rounded-2xl'
                type="text"
                placeholder="Cidade"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            />
            {errors.city && <p style={{ color: 'red' }}>{errors.city}</p>}

            <div className='flex flex-row justify-between items-center my-4'>
            <button  className='w-1/3 bg-gray-700 text-white rounded-2xl h-9'  onClick={handleBack}>Voltar</button>
            <button  className='w-1/3 bg-blue-700 text-white rounded-2xl h-9'  onClick={handleNext}>Próximo</button>
            </div>
        </div>
    );
}
