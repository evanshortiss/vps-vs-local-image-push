'use strict'

const PORT = 8080
const HOST = '0.0.0.0'

// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true
})

// Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

// Run the server!
fastify.listen(PORT, HOST, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
