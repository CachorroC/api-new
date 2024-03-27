import { Prisma } from '@prisma/client';
import { ClassDeudor } from './deudor';
import { ClassDemanda } from './demanda';
import prisma from '../services/prisma';
import Carpeta from './carpeta';

export class PrismaCarpeta {
  static async updateNotes(
    incomingCarpeta: Carpeta
  ) {
    const {
      notas
    } = incomingCarpeta;

    const updater = await prisma.nota.createMany(
      {
        data          : notas,
        skipDuplicates: true,
      }
    );
    console.log(
      updater
    );
    return updater.count;
  }
  static async getCarpeta(
    numero: number
  ) {
    return await prisma.carpeta.findFirstOrThrow(
      {
        where: {
          numero: numero,
        },
        include: {
          ultimaActuacion: true,
          deudor         : true,
          codeudor       : true,
          notas          : true,
          tareas         : true,
          demanda        : {
            include: {
              notificacion: {
                include: {
                  notifiers: true,
                },
              },
              medidasCautelares: true,
            },
          },
          procesos: {
            include: {
              juzgado: true,
            },
          },
        },
      }
    );
  }
  static async updateCarpeta(
    incomingCarpeta: Carpeta
  ) {
    const {
      ultimaActuacion, demanda, deudor, notas
    } = incomingCarpeta;

    const newDemanda = ClassDemanda.prismaDemanda(
      demanda
    );

    const newDeudor = ClassDeudor.prismaDeudor(
      deudor
    );

    const newCarpeta = Carpeta.prismaCarpeta(
      incomingCarpeta
    );

    const inserter = await prisma.carpeta.update(
      {
        where: {
          numero: incomingCarpeta.numero,
        },
        data: {
          category       : newCarpeta.category,
          fecha          : newCarpeta.fecha,
          terminado      : newCarpeta.terminado,
          nombre         : newCarpeta.nombre,
          notasCount     : newCarpeta.notasCount,
          ultimaActuacion: ultimaActuacion
            ? {
                connectOrCreate: {
                  where: {
                    idRegActuacion: ultimaActuacion.idRegActuacion,
                  },
                  create: {
                    ...ultimaActuacion,
                  },
                },
              }
            : undefined,
          deudor: {
            update: {
              ...newDeudor,
            },
          },
          demanda: {
            update: {
              ...newDemanda,
            },
          },
          notas: {
            createMany: {
              data          : notas,
              skipDuplicates: true,
            },
          },
        },
      }
    );
    console.log(
      inserter
    );
  }
  static async insertCarpeta(
    incomingCarpeta: Carpeta
  ) {
    const {
      idRegUltimaAct,
      ultimaActuacion,
      procesos,
      actuaciones,
      demanda,
      deudor,
      codeudor,
      notas,
    } = incomingCarpeta;
    console.log(
      idRegUltimaAct
    );

    const newDemanda = ClassDemanda.prismaDemanda(
      demanda
    );

    const newDeudor = ClassDeudor.prismaDeudor(
      deudor
    );

    const newCarpeta = Carpeta.prismaCarpeta(
      incomingCarpeta
    );

    const inserter = await prisma.carpeta.upsert(
      {
        where: {
          numero: incomingCarpeta.numero,
        },
        create: {
          ...newCarpeta,
          ultimaActuacion: ultimaActuacion
            ? {
                connectOrCreate: {
                  where: {
                    idRegActuacion: ultimaActuacion.idRegActuacion,
                  },
                  create: {
                    ...ultimaActuacion,
                  },
                },
              }
            : undefined,
          deudor: {
            connectOrCreate: {
              where: {
                id: incomingCarpeta.numero,
              },
              create: newDeudor,
            },
          },
          demanda: {
            connectOrCreate: {
              where: {
                id: incomingCarpeta.numero,
              },
              create: newDemanda,
            },
          },
          codeudor: {
            connectOrCreate: {
              where: {
                id: incomingCarpeta.numero,
              },
              create: {
                ...codeudor,
              },
            },
          },
          notas: {
            createMany: {
              data          : notas,
              skipDuplicates: true,
            },
          },
          procesos: {
            connectOrCreate: procesos.map(
              (
                proceso
              ) => {
                const {
                  juzgado, ...restProceso
                } = proceso;

                const procesoCreateorConnect: Prisma.ProcesoCreateOrConnectWithoutCarpetaInput
              = {
                where: {
                  idProceso: proceso.idProceso,
                },
                create: {
                  ...restProceso,
                  juzgado: {
                    connectOrCreate: {
                      where: {
                        tipo: juzgado.tipo,
                      },
                      create: {
                        ...juzgado,
                      },
                    },
                  },
                  actuaciones: {
                    connectOrCreate: actuaciones.map(
                      (
                        actuacion
                      ) => {
                        const actuacionCreateOrConnect: Prisma.ActuacionCreateOrConnectWithoutCarpetaInput
                        = {
                          where: {
                            idRegActuacion: actuacion.idRegActuacion,
                          },
                          create: {
                            ...actuacion,
                          },
                        };
                        return actuacionCreateOrConnect;
                      }
                    ),
                  },
                },
              };

                return procesoCreateorConnect;
              }
            ),
          },
        },
        update: {
          category       : newCarpeta.category,
          terminado      : newCarpeta.terminado,
          revisado       : newCarpeta.revisado,
          nombre         : newCarpeta.nombre,
          notasCount     : newCarpeta.notasCount,
          ultimaActuacion: ultimaActuacion
            ? {
                connectOrCreate: {
                  where: {
                    idRegActuacion: ultimaActuacion.idRegActuacion,
                  },
                  create: {
                    ...ultimaActuacion,
                  },
                },
              }
            : undefined,
          demanda: {
            connectOrCreate: {
              where: {
                id: incomingCarpeta.numero,
              },
              create: newDemanda,
            },
          },
          notas: {
            createMany: {
              data          : notas,
              skipDuplicates: true,
            },
          },
          procesos: {
            connectOrCreate: procesos.map(
              (
                proceso
              ) => {
                const {
                  juzgado, ...restProceso
                } = proceso;

                const procesoCreateorConnect: Prisma.ProcesoCreateOrConnectWithoutCarpetaInput
              = {
                where: {
                  idProceso: proceso.idProceso,
                },
                create: {
                  ...restProceso,
                  juzgado: {
                    connectOrCreate: {
                      where: {
                        tipo: juzgado.tipo,
                      },
                      create: {
                        ...juzgado,
                      },
                    },
                  },
                  actuaciones: {
                    connectOrCreate: actuaciones.map(
                      (
                        actuacion
                      ) => {
                        const actuacionCreateOrConnect: Prisma.ActuacionCreateOrConnectWithoutCarpetaInput
                        = {
                          where: {
                            idRegActuacion: actuacion.idRegActuacion,
                          },
                          create: {
                            ...actuacion,
                          },
                        };
                        return actuacionCreateOrConnect;
                      }
                    ),
                  },
                },
              };

                return procesoCreateorConnect;
              }
            ),
          },
        },
      }
    );
    console.log(
      inserter
    );
  }
}
