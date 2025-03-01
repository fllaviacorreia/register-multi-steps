// app/cadastro/page.js
'use client';
import { useRouter } from 'next/navigation';

export default function Cadastro() {
    const router = useRouter();

    return (
        <div className='flex flex-col max-w-xl bg-blue-50 p-5 m-5 '>
            <h1>Cadastro Multi-etapas</h1>
            <button className='w-1/2 bg-blue-700 text-white my-3 rounded-2xl h-9' onClick={() => router.push('/register/step1')}>
                Iniciar Cadastro
            </button>
        </div>
    );
}
