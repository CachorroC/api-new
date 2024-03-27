import type { IntNota } from '../types/notas.type';
export declare class NotasBuilder implements IntNota {
    createdAt: Date;
    pathname: string | null;
    dueDate: Date | null;
    text: string;
    content: string[];
    id: string;
    constructor(incomingNote: string, carpetaNumero?: number, index?: number);
}
