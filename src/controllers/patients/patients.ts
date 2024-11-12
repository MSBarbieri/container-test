import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { create } from "./create";

export async function patientsRoute(app: FastifyInstance) {
    app.post('/patients/create', create)
}
