'use client';

import Link from "next/link";
import { useForm } from "react-hook-form";


export default function SignInPage() {
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
        <div className="min-h-screen flex justify-center items-center">
            <div className="flex flex-col md:max-w-[30rem] sm:w-full p-5 h-auto rounded shadow-md" >
                <h1 className="text-3xl font-bold text-center mb-5">
                    Faça seu login
                </h1>

                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="flex flex-col mb-3">
                        <label htmlFor="email" className="mb-2">Email</label>
                        <input
                            className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500 mb-2"
                            type="email"
                            id="email"
                            {...register("email", { required: true, maxLength: 30, pattern: /^\S+@\S+$/i })}
                        />
                        {errors.email?.type === 'required' && <span className="text-red-600 text-sm">Esse campo é obrigatório</span>}
                        {errors.email?.type === 'pattern' && <span className="text-red-600 text-sm">Email inválido</span>}
                    </div>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="password" className="mb-2">Senha</label>
                        <input
                            className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500 mb-2"
                            type="password"
                            id="password"
                            {...register("password", { required: true, minLength: 6 })}
                        />
                        {errors.password && <span className="text-red-600 text-sm">Esse campo é obrigatório</span>}
                        {errors.password?.type === 'minLength' && <span className="text-red-600 text-sm">A senha deve ter no mínimo 6 caracteres</span>}
                        {errors.confirmPassword?.type === 'validate' && <span className="text-red-600 text-sm">As senhas não coincidem</span>}
                    </div>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="confirmPassword" className="mb-2">Confirme sua senha</label>
                        <input
                            className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500 mb-2"
                            type="password"
                            id="confirmPassword"
                            {...register("confirmPassword", { required: true, minLength: 6 })}
                        />
                        {errors.confirmPassword?.type === 'required' && <span className="text-red-600 text-sm">Esse campo é obrigatório</span>}
                        {errors.confirmPassword?.type === 'minLength' && <span className="text-red-600 text-sm">A senha deve ter no mínimo 6 caracteres</span>}
                        {errors.confirmPassword?.type === 'validate' && <span className="text-red-600 text-sm">As senhas não coincidem</span>}
                    </div>
                    <hr className="my-5" />

                    <div className="mb-5">
                        <button type="submit" className="p-3 bg-blue-500 w-full rounded-lg text-white hover:bg-blue-600 transition">
                            Entrar
                        </button>
                    </div>
                    <p className="text-center">
                        Ainda não tem uma conta? <Link href="/auth/signup" className="text-blue-600">Faça seu cadastro</Link>
                    </p>
                </form>
            </div>
        </div>

    )
}