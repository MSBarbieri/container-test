import { FastifyReply, FastifyRequest } from "fastify";
import { AppointmentsRepository } from "../../repositories/appointments-repository";
import { GetApopintmentsByCpf } from "../../use-cases/get-appointments-by-cpf";

export async function getAppointmentsByCpf(req: FastifyRequest, res: FastifyReply) {
    const { cpf }: any = req.params
    const appointmentsRepository = new AppointmentsRepository()
    const appointmentsByCpf = new GetApopintmentsByCpf(appointmentsRepository)
    const result = await appointmentsByCpf.handle(cpf)
    res.send({
        result
    }).status(200)
}