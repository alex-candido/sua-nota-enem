import { FastifyAdapter } from '@nestjs/platform-fastify';

import FastifyCookie from '@fastify/cookie';
import FastifyMultipart from '@fastify/multipart';

// [Fastify](https://docs.nestjs.com/techniques/performance)
const app: FastifyAdapter = new FastifyAdapter({
  trustProxy: true,
  logger: false,
  // forceCloseConnections: true,
});

app.register(FastifyMultipart, {
  limits: {
    fields: 10, // Número máximo de campos não relacionados a arquivos
    fileSize: 6 * 1024 * 1024, // Tamanho máximo por arquivo (6 MB)
    files: 5, // Número máximo de campos de arquivo
  },
});

app.register(FastifyCookie, {
  secret: 'cookie-secret',
});

app.getInstance().addHook('onRequest', (request, reply, done) => {
  request.headers.origin = request.headers.origin || request.headers.host;

  if (request.url.endsWith('.php')) {
    reply.raw.statusMessage = 'PHP is not support on this machine.';

    return reply.code(418).send();
  }

  if (
    request.url.match(/favicon.ico$/) ||
    request.url.match(/manifest.json$/)
  ) {
    reply.code(204).send();
    return done();
  }

  done();
});

export { app as FastifyApp };
