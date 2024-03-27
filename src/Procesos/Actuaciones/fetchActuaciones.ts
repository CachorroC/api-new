import type { ConsultaActuacion } from '../../types/actuaciones.type';

export default async function fetchActuaciones(
  idProceso: number
) {
  try {
    const request = await fetch(
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ idProceso }`,
    );


    if ( !request.ok ) {
      return await request.json();
    }

    const json = ( await request.json() ) as ConsultaActuacion;

    const {
      actuaciones
    } = json;

    return actuaciones.map(
      (
        actuacion
      ) => {


        return {
          ...actuacion,
          fechaActuacion: new Date(
            actuacion.fechaActuacion
          ),
          fechaRegistro: new Date(
            actuacion.fechaRegistro
          ),
          fechaInicial: actuacion.fechaInicial
            ? new Date(
              actuacion.fechaInicial
            )
            : null,
          fechaFinal: actuacion.fechaFinal
            ? new Date(
              actuacion.fechaFinal
            )
            : null,
          isUltimaAct: actuacion.cant === actuacion.consActuacion
            ? true
            : false,
          idProceso: idProceso,
        };
      }
    );
  } catch ( error ) {
    console.log(
      error
    );
    return [];
  }
}
