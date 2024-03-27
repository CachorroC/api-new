import type { Prisma } from '@prisma/client';
import type { intNotificacion, intNotifier } from '../types/carpetas.type';
import type { RawDb } from '../types/raw-db.type';
export declare class ClassNotificacion implements intNotificacion {
    constructor(rawDb: RawDb);
    id: number;
    notifiers: intNotifier[];
    certimail: boolean | null;
    fisico: boolean | null;
    autoNotificado: Date | null;
    static prismaNotificacion(notificacion: intNotificacion): Prisma.NotificacionCreateWithoutDemandaInput;
}
