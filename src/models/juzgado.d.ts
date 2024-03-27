import type { Juzgado } from '../types/carpetas.type';
import type { intProceso } from '../types/procesos.type';
export declare class NewJuzgado implements Juzgado {
    constructor(proceso: intProceso);
    id: number;
    tipo: string;
    url: string;
}
