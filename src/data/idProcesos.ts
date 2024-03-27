import prisma from '../services/prisma';

export async function getIdProcesos () {
  const carpetas = await prisma.carpeta.findMany();
  return carpetas.flatMap(
 (
 carpeta 
) => {
    return carpeta.idProcesos;
  } 
);
}