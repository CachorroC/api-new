await Bun.build(
  {
    entrypoints: [ './src/index.ts' ],
    outdir     : './out',
    target     : 'node',
    external   : [ 'prisma' ]
  }
);
