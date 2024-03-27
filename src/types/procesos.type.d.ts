import type { intActuacion } from './actuaciones.type';
import type { Juzgado } from './carpetas.type';
export interface Data {
    StatusCode: number;
    Message: Message | string;
    procesos?: intProceso[];
    actuaciones?: intActuacion[];
}
export interface ConsultaNumeroRadicacion {
    tipoConsulta: string;
    procesos: intProceso[];
    parametros: Parametros;
    paginacion: Paginacion;
}
export type Message = 'OK' | 'El parametro "NumeroRadicacion" ha de contener 23 digitos.' | 'Object reference not set to an instance of an object.' | 'No se pueden ver actuaciones de un proceso privado';
export interface Paginacion {
    cantidadRegistros: number;
    registrosPagina: number;
    cantidadPaginas: number;
    pagina: number;
    paginas: null;
}
export interface Parametros {
    numero: string;
    nombre: null;
    tipoPersona: null;
    idSujeto: null;
    ponente: null;
    claseProceso: null;
    codificacionDespacho: null;
    soloActivos: boolean;
}
export interface intProceso {
    cantFilas: number;
    departamento: Departamento;
    despacho: string;
    esPrivado: boolean;
    fechaProceso: Date | string | null;
    fechaUltimaActuacion: Date | string | null;
    idConexion: number;
    idProceso: number;
    llaveProceso: string;
    sujetosProcesales: string;
}
export interface outProceso extends intProceso {
    fechaProceso: Date | null;
    fechaUltimaActuacion: Date | null;
    juzgado: Juzgado;
}
export type Departamento = 'BOGOTÁ' | 'CUNDINAMARCA' | 'ANTIOQUIA' | 'META';
export type TipoConsulta = 'NumeroRadicacion';
export declare class Convert {
    static toConsultaNumeroRadicacion(json: string): ConsultaNumeroRadicacion;
    static consultaNumeroRadicacionToJson(value: ConsultaNumeroRadicacion): string;
    static toPaginacion(json: string): Paginacion;
    static paginacionToJson(value: Paginacion): string;
    static toParametros(json: string): Parametros;
    static parametrosToJson(value: Parametros): string;
    static toProceso(json: string): intProceso;
    static procesoToJson(value: intProceso): string;
}
