import { Prisma } from '@prisma/client';
import Carpeta from './carpeta';
export declare class PrismaCarpeta {
    static updateNotes(incomingCarpeta: Carpeta): Promise<number>;
    static getCarpeta(numero: number): Promise<{
        ultimaActuacion: {
            actuacion: string;
            anotacion: string | null;
            cant: number;
            carpetaNumero: number | null;
            codRegla: string;
            conDocumentos: boolean;
            consActuacion: number;
            createdAt: Date;
            fechaActuacion: Date;
            fechaFinal: Date | null;
            fechaInicial: Date | null;
            fechaRegistro: Date;
            idProceso: number;
            idRegActuacion: number;
            isUltimaAct: boolean;
            llaveProceso: string;
            procesoId: number | null;
        } | null;
        codeudor: {
            carpetaNumero: number;
            cedula: string | null;
            direccion: string | null;
            id: number;
            nombre: string | null;
            telefono: string | null;
        } | null;
        demanda: ({
            notificacion: ({
                notifiers: {
                    fechaAporta: Date | null;
                    fechaRecibido: Date | null;
                    notificacionId: number;
                    resultado: boolean | null;
                    tipo: string;
                    carpetaNumero: number;
                }[];
            } & {
                demandaId: number;
                certimail: boolean | null;
                fisico: boolean | null;
                id: number;
                autoNotificado: Date | null;
            }) | null;
            medidasCautelares: {
                demandaId: number;
                fechaOrdenaMedida: Date | null;
                id: number;
                medidaSolicitada: string | null;
            } | null;
        } & {
            carpetaNumero: number;
            departamento: string | null;
            despacho: string | null;
            entregaGarantiasAbogado: Date | null;
            etapaProcesal: string | null;
            llaveProceso: string | null;
            fechaPresentacion: Date[];
            id: number;
            tipoProceso: string;
            municipio: string | null;
            obligacion: string[];
            radicado: string | null;
            vencimientoPagare: Date[];
            capitalAdeudado: Prisma.Decimal;
            mandamientoPago: Date[];
            avaluo: Prisma.Decimal;
            liquidacion: Prisma.Decimal;
        }) | null;
        deudor: {
            carpetaNumero: number;
            cedula: string;
            direccion: string | null;
            email: string | null;
            id: number;
            primerApellido: string;
            primerNombre: string;
            segundoApellido: string | null;
            segundoNombre: string | null;
            telCelular: string | null;
            telFijo: string | null;
        } | null;
        notas: {
            carpetaNumero: number | null;
            createdAt: Date;
            id: string;
            pathname: string | null;
            updatedAt: Date;
            dueDate: Date | null;
            text: string;
            content: string[];
        }[];
        procesos: ({
            juzgado: {
                id: number;
                tipo: string;
                url: string;
            };
        } & {
            id: number;
            cantFilas: number;
            carpetaNumero: number;
            departamento: string;
            despacho: string;
            esPrivado: boolean;
            fechaProceso: Date | null;
            fechaUltimaActuacion: Date | null;
            idConexion: number;
            idProceso: number;
            juzgadoTipo: string;
            llaveProceso: string;
            sujetosProcesales: string;
        })[];
        tareas: {
            carpetaNumero: number | null;
            done: boolean;
            createdAt: Date;
            dueDate: Date;
            id: number;
            text: string;
            updatedAt: Date;
            content: string[];
        }[];
    } & {
        id: number;
        fecha: Date | null;
        idProcesos: number[];
        idRegUltimaAct: number | null;
        llaveProceso: string;
        nombre: string;
        numero: number;
        revisado: boolean;
        terminado: boolean;
        updatedAt: Date;
        category: string;
        tipoProceso: string;
        notasCount: number | null;
    }>;
    static updateCarpeta(incomingCarpeta: Carpeta): Promise<void>;
    static insertCarpeta(incomingCarpeta: Carpeta): Promise<void>;
}
