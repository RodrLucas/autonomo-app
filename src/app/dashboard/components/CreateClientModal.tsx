import { DefaultModal } from "./DefaultModal";

interface CreateClientModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CreateClientModal({
    isOpen,
    onClose
}: CreateClientModalProps) {

    console.log('CreateClientModal isOpen', isOpen);

    return (
        <DefaultModal
            title="Cadastrar cliente"
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="relative w-full mb-3">
                <label
                    className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                    htmlFor="grid-password"
                >
                    Nome
                </label>
                <input
                    type="text"
                    className="text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear"
                />
            </div>
            <div className="relative w-full mb-3">
                <label
                    className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                    htmlFor="grid-password"
                >
                    Telefone
                </label>
                <input
                    type="text"
                    className="text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear"
                />
            </div>
            <div className="relative w-full mb-3">
                <label
                    className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                    htmlFor="grid-password"
                >
                    E-mail
                </label>
                <input
                    type="email"
                    className="text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear"
                />
            </div>
        </DefaultModal>
    )
}

