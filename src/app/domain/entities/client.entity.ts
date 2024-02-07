export enum DocumentTypeEnum {
    CPF = 'CPF',
    CNPJ = 'CNPJ'
}

export interface IClientEntity {
    id: string;
    name: string;
    telephone: string;
    birthDate: string;
    documentType: DocumentTypeEnum;
    document: string;
    email?: string;
    address?: string;
}
