import { FastifyInstance } from "fastify";
import { getAllDoctors } from "./getAllDoctors";

export async function doctorsRoute(app: FastifyInstance) {
    app.get('/doctors/get-all', getAllDoctors)
}
