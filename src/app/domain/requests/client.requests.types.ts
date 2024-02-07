import { DocumentTypeEnum } from "../entities/client.entity";


export interface CreateClientRequest {
    name: string;
    telephone: string;
    birthDate: string;
    documentType: DocumentTypeEnum;
    document: string;
    email?: string;
    address?: string;
}

