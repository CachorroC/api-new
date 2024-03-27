import { getIdProcesos } from '../../data/idProcesos';
import fetchActuaciones from './fetchActuaciones';
import { mkdir } from 'node:fs/promises';


export async function getActuaciones () {
  const mappedProceso = new Map();

  const idProcesos = await getIdProcesos();

  for ( const idProceso of idProcesos ) {
    const actuaciones = await fetchActuaciones(
      idProceso
    );

    await mkdir(
      `src/Carpetas/${ idProceso }`, {
        recursive: true
      }
    );
    Bun.write(
      `src/Carpetas/${ idProceso }/actuaciones.json`, Response.json(
        actuaciones
      )
    );
    mappedProceso.set(
      idProceso, actuaciones
    );
  }

  return Array.from(
    mappedProceso.values()
  );
}
