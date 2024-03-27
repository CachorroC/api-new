export type Message = 'OK' | 'Object reference not set to an instance of an object.' | 'No se pueden ver actuaciones de un proceso privado';
export interface ConsultaActuacion {
    actuaciones: intActuacion[];
    paginacion: Paginacion;
}
export interface intActuacion {
    idRegActuacion: number;
    llaveProceso: string;
    consActuacion: number;
    fechaActuacion: Date;
    actuacion: string;
    anotacion: null | string;
    fechaInicial: Date | null;
    carpetaNumero: number | null;
    createdAt: Date;
    fechaFinal: Date | null;
    fechaRegistro: Date;
    codRegla: string;
    conDocumentos: boolean;
    cant: number;
}
export interface outActuacion extends intActuacion {
    createdAt: Date;
    idProceso: number;
    isUltimaAct: boolean;
}
export type CodRegla = '00                              ';
export interface Paginacion {
    cantidadRegistros: number;
    registrosPagina: number;
    cantidadPaginas: number;
    pagina: number;
    paginas: null;
}
export declare class actuacionConvert {
    static actuacioneToJson(value: intActuacion): string;
    static consultaActuacionToJson(value: ConsultaActuacion): string;
    static paginacionToJson(value: Paginacion): string;
    static toActuacione(json: string): intActuacion;
    static toConsultaActuacion(json: string): ConsultaActuacion;
    static toPaginacion(json: string): Paginacion;
}
