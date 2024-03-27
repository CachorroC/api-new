import { Decimal } from '@prisma/client/runtime/library';
import type { IntDemanda, intNotificacion, TipoProceso } from '../types/carpetas.type';
import type { RawDb } from '../types/raw-db.type';
import type { Prisma } from '@prisma/client';
export declare class ClassDemanda implements IntDemanda {
    constructor(rawCarpeta: RawDb);
    liquidacion: Decimal;
    avaluo: Decimal;
    capitalAdeudado: Decimal;
    carpetaNumero: number;
    departamento: string | null;
    despacho: string | null;
    entregaGarantiasAbogado: Date | null;
    etapaProcesal: string | null;
    fechaPresentacion: Date[];
    id: number;
    llaveProceso: string | null;
    mandamientoPago: Date[];
    municipio: string | null;
    notificacion: intNotificacion;
    obligacion: string[];
    radicado: string | null;
    tipoProceso: TipoProceso;
    vencimientoPagare: Date[];
    medidasCautelares: {
        id: number;
        fechaOrdenaMedida: Date | null;
        medidaSolicitada: string | null;
    };
    static prismaDemanda(demanda: IntDemanda): Prisma.DemandaCreateWithoutCarpetaInput;
}
