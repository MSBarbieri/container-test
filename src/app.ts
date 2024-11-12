import 'dotenv/config'
import fastify, { FastifyReply, FastifyRequest } from 'fastify'
import { patientsRoute } from './controllers/patients/patients'
import { appointmentsRoutes } from './controllers/appointments/appointments'
import cors from '@fastify/cors'
import { doctorsRoute } from './controllers/doctors/doctors'

export const app = fastify()

app.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PATCH'],
})


app.register(patientsRoute, { prefix: '/mock-server' })
app.register(appointmentsRoutes, { prefix: '/mock-server' })
app.register(doctorsRoute, { prefix: '/mock-server' })
