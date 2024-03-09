interface InputFormProps {
    register: any,
    label: string,
    error: any
    type: string
}

export default function InputForm({
    register,
    label,
    error,
    type

}: InputFormProps) {
    return (
        <>
            <label htmlFor={label} className="mb-2">{label}</label>
            <input
                className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500 mb-2"
                type={type}
                id={label}
                {...register}
            />
            {error?.type === 'required' && <span className="text-red-600 text-sm">Esse campo é obrigatório</span>}

            
            {error?.type === 'minLength' && <span className="text-red-600 text-sm">Esse campo deve ter no mínimo 6 caracteres</span>}
            {error?.type === 'maxLength' && <span className="text-red-600 text-sm">Esse campo deve ter no máximo 30 caracteres</span>}
            {error?.type === 'validate' && <span className="text-red-600 text-sm">As senhas não coincidem</span>}
            {error?.type === 'pattern' && <span className="text-red-600 text-sm">Email inválido</span>}
        </>
    )
}