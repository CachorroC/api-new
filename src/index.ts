import { getActuaciones } from './Procesos/Actuaciones/getActuaciones';


const server = Bun.serve(
  {
    async fetch (
      req
    ) {

      const path = new URL(
        req.url
      ).pathname;

      // respond with text/html
      if ( path === '/' ) {
        return new Response(
          'Welcome to Bun!'
        );
      }

      // redirect
      if ( path === '/abc' ) {
        return Response.redirect(
          '/source', 301
        );
      }

      // send back a file (in this case, *this* file)
      if ( path === '/source' ) {
        return new Response(
          Bun.file(
            import.meta.file
          )
        );
      }

      // respond with JSON
      if ( path === '/api' ) {

        const acts = await getActuaciones();

        console.log(
          acts
        );

        return Response.json(
          acts
        );
      }

      // receive JSON data to a POST request
      if ( req.method === 'POST' && path === '/api/post' ) {
        const data = await req.json();
        console.log(
          'Received JSON:', data
        );
        return Response.json(
          {
            success: true,
            data
          }
        );
      }

      // receive POST data from a form
      if ( req.method === 'POST' && path === '/form' ) {
        const data = await req.formData();
        console.log(
          data.get(
            'someField'
          )
        );
        return new Response(
          'Success'
        );
      }

      // 404s
      return new Response(
        'Page not found', {
          status: 404
        }
      );
    }
  }
);

console.log(
  `Listening on ${ server.url } and ${ JSON.stringify(
    server.hostname
  ) }`
);
