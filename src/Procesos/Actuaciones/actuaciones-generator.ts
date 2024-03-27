
import prisma from '../../services/prisma';
import type { outActuacion } from '../../types/actuaciones.type';
import fetchActuaciones from './fetchActuaciones';
import { prismaUpdaterActuaciones } from './prisma-updater';

export async function* AsyncGenerateActuaciones(
  idProcesos: number[]
) {
  for ( const idProceso of idProcesos ) {
    const indexOf = idProcesos.indexOf(
      idProceso
    );
    console.log(
      indexOf
    );

    const fetcherIdProceso = await fetchActuaciones(
      idProceso
    ) as outActuacion[];

    await prismaUpdaterActuaciones(
      fetcherIdProceso
    );

    await prisma.actuacion.createMany(
      {
        data          : fetcherIdProceso,
        skipDuplicates: true,
      }
    );
    yield `${ JSON.stringify(
      fetcherIdProceso
    ) }`;
  }
}
