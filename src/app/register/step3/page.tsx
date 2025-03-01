// app/cadastro/step3.js
'use client';
import { useRegister } from '@/context/registerContext';
import { useRouter } from 'next/navigation';

export default function Step3() {
    const { formData } = useRegister();
    const router = useRouter();

    const handleBack = () => {
        router.push('/register/step2');
    };

    const handleSubmit = () => {
        console.log('Enviando dados:', formData);
        // Aqui você pode enviar os dados para uma API ou Context
        alert('Cadastro enviado com sucesso!');
        router.push('/');
    };

    return (
        <div className='flex flex-col max-w-xl bg-blue-50 p-5 m-5 '>
            <h2>Etapa 3 - Revisão</h2>
            <p><strong>Nome:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Endereço:</strong> {formData.address}</p>
            <p><strong>Cidade:</strong> {formData.city}</p>
            <div className='flex flex-row justify-between items-center my-4'>
            <button  className='w-1/3 bg-gray-700 text-white rounded-2xl h-9'  onClick={handleBack}>Voltar</button>
            <button  className='w-1/3 bg-blue-700 text-white rounded-2xl h-9'  onClick={handleSubmit}>Próximo</button>
            </div>
        </div>
    );
}
