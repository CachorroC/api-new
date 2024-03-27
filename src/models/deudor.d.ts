import { Prisma } from '@prisma/client';
import type { IntDeudor } from '../types/carpetas.type';
import type { RawDb } from '../types/raw-db.type';
export declare class Tel {
    fijo: string | null;
    celular: string | null;
    constructor(telefono: string);
}
export declare class ClassDeudor implements IntDeudor {
    constructor(rawCarpeta: RawDb);
    id: number;
    telCelular: string | null;
    telFijo: string | null;
    primerNombre: string;
    segundoNombre: string | null;
    primerApellido: string;
    segundoApellido: string | null;
    cedula: string;
    direccion: string | null;
    email: string | null;
    static prismaDeudor(deudor: IntDeudor): Prisma.DeudorCreateWithoutCarpetaInput;
}
