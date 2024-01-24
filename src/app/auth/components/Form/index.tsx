'use client';

import Link from "next/link";
import { useForm } from "react-hook-form";
import InputForm from "./InputForm";

interface FormProps {
    authType: string
}

export default function Form({
    authType
}: FormProps) {
    const { register, handleSubmit, formState: { errors }, getValues, setError } = useForm();

    const onSubmit = () => {
        const { password, confirmPassword } = getValues();
        if (password !== confirmPassword) {
            setError('confirmPassword', { type: 'validate' });
            return;
        }

        console.log('Cadastro realizado com sucesso');
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            {authType === 'signup' && (
                <div className="flex flex-col mb-3">
                    <InputForm
                        type="text"
                        label="Nome"
                        register={register("name", { required: true, maxLength: 30, minLength: 5 })}
                        error={errors.name}
                    />
                </div>
            )}
            <div className="flex flex-col mb-3">
                <InputForm
                    type="email"
                    label="Email"
                    register={register("email", { required: true, maxLength: 30, pattern: /^\S+@\S+$/i })}
                    error={errors.email}
                />
            </div>
            <div className="flex flex-col mb-3">
                <InputForm
                    type="password"
                    label="Senha"
                    register={register("password", { required: true, minLength: 6 })}
                    error={errors.password}
                />
            </div>
            <div className="flex flex-col mb-3">
                <InputForm
                    type="password"
                    label="Confirmar senha"
                    register={register("confirmPassword", { required: true, minLength: 6 })}
                    error={errors.confirmPassword}
                />
            </div>
            <hr className="my-5" />

            <div className="mb-5">
                <button type="submit" className="p-3 bg-blue-500 w-full rounded-lg text-white hover:bg-blue-600 transition">
                    Entrar
                </button>
            </div>
            <p className="text-center">
                {authType === 'signup' ? (
                    <span>Já tem uma conta? <Link href="/auth/signin" className="text-blue-500 hover:underline">Faça seu login</Link></span>
                ) : (
                    <span>Não tem uma conta? <Link href="/auth/signup" className="text-blue-500 hover:underline">Crie sua conta</Link></span>
                )}
            </p>
        </form >
    )
}