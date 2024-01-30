import Form from "../components/Form";


export default function SignUpPage() {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="flex flex-col md:max-w-[30rem] sm:w-full p-5 h-auto rounded shadow-md" >
                <h1 className="text-3xl font-bold text-center mb-5">Crie sua conta</h1>

                <Form
                    authType="signup"
                />
            </div>
        </div>

    )
}