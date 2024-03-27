
import { generateCarpetas } from './data/carpetas-generator';
import { PrismaCarpeta } from './models/prisma-carpeta';
import type Carpeta from './models/carpeta';
import { writeFile } from 'fs/promises';

async function tryAsyncCarpetas() {
  const mapCarpetas: Map<number, Carpeta> = new Map();

  await writeFile(
    'carpetasModelPreAwait.json', JSON.stringify(
      Array.from(
        mapCarpetas.values()
      )
    )
  );

  for await ( const carpeta of generateCarpetas() ) {
    await PrismaCarpeta.insertCarpeta(
      carpeta
    );
    console.log(
      carpeta
    );
    mapCarpetas.set(
      carpeta.numero, carpeta
    );
  }

  await writeFile(
    'carpetasModelPostAwait.json', JSON.stringify(
      Array.from(
        mapCarpetas.values()
      )
    )
  );
  return Array.from(
    mapCarpetas.values()
  );
}


tryAsyncCarpetas()
  .then(
    (
      ff
    ) => {
      console.log(
        ff
      );
      return ff;
    }
  );
