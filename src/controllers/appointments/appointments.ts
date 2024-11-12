import { FastifyInstance } from "fastify";
import { create } from "./create";
import { getAll } from "./get-all-appointments";
import { getAppointmentsByCpf } from "./get-appointments-by-cpf";
import { updateAppointment } from "./update-appointment";

export async function appointmentsRoutes(app: FastifyInstance) {
    app.post('/appointments/create', create)
    app.get('/appointments/get-all', getAll)
    app.get('/appointments/get-by-cpf/:cpf', getAppointmentsByCpf)
    app.patch('/appointments/update', updateAppointment)
}
