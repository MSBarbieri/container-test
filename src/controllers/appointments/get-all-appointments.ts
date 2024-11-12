import { FastifyReply, FastifyRequest } from "fastify"
import { AppointmentsRepository } from "../../repositories/appointments-repository"
import { GetAllAppointments } from "../../use-cases/get-all-appointments"

export async function getAll(_: FastifyRequest, res: FastifyReply) {
    const appointmentsRepository = new AppointmentsRepository()
    const appointments = new GetAllAppointments(appointmentsRepository)
    const response = await appointments.handle()
    res.send({
        response
    }).status(200)
}