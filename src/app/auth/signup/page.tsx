'use client';
import Link from "next/link";
import { useForm } from "react-hook-form";


export default function SignUpPage() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    return (

        <div
            className="bg-slate-200 flex flex-col max-w-3xl p-5 w-full h-2/3"
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                borderRadius: "10px",
            }}

        >
            <h1 className="text-3xl font-bold text-center">Crie sua conta</h1>
            <hr className="my-5" />

            <form onSubmit={handleSubmit((data) => console.log(data))} >
                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register("email", { required: true })} />
                    {errors.email && <span>Esse campo é obrigatório</span>}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" {...register("password", { required: true })} />
                    {errors.password && <span>Esse campo é obrigatório</span>}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="confirmPassword">Confirme sua senha</label>
                    <input type="password" id="confirmPassword" {...register("confirmPassword", { required: true })} />
                    {errors.confirmPassword && <span>Esse campo é obrigatório</span>}
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="p-5 bg-blue-500">
                        Cadastrar
                    </button>
                </div>
                <p className="text-center">
                    Já tem uma conta? <Link href="/auth/signin">Faça login</Link>
                </p>
            </form>
        </div>

    )
}