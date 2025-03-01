// context/RegisterContext.js
'use client'
import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

type Register = {
    name: string,
    email: string,
    password: string,
    address: string,
    city: string,
}

type ContextType = {
    formData: Register,
    setFormData: Dispatch<SetStateAction<Register>>
}
const RegisterContext = createContext<ContextType>({ formData: { name: '', email: '', password: '', address: '', city: '' }, setFormData: async () => {}});

export function RegisterProvider({ children }: any) {
    const [formData, setFormData] = useState<Register>({
        name: '',
        email: '',
        password: '',
        address: '',
        city: '',
    });

    return (
        <RegisterContext.Provider value={{ formData, setFormData }}>
            {children}
        </RegisterContext.Provider>
    );
}

export function useRegister() {
    return useContext(RegisterContext);
}
