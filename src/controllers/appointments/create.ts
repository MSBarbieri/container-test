import { FastifyReply, FastifyRequest } from "fastify"
import { CreateAppointment } from "../../use-cases/create-appointment"
import { AppointmentsRepository } from "../../repositories/appointments-repository"

export async function create (req: FastifyRequest, res: FastifyReply) {
    const data: any = req.body
    const appointmentRepository = new AppointmentsRepository()
    const createAppointment = new CreateAppointment(appointmentRepository)
    const response = await createAppointment.handle(data)
    res.send(
        response
    ).status(2000)
}