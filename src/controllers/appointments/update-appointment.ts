import { FastifyReply, FastifyRequest } from "fastify";
import { AppointmentsRepository } from "../../repositories/appointments-repository";
import { UpdateAppointment } from "../../use-cases/update-appointment";

export async function updateAppointment(req: FastifyRequest, res: FastifyReply) {
    const data: any = req.body
    const appointmentsRepository = new AppointmentsRepository()
    const updateAppointment = new UpdateAppointment(appointmentsRepository)
    const updatedAppointment = await updateAppointment.handle(data)
    res.send({
        updatedAppointment,
    }).status(200)
}