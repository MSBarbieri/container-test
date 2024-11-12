import { FastifyReply, FastifyRequest } from "fastify";
import { DoctorsRepository } from "../../repositories/doctors-repository";
import { GetAllDoctors } from "../../use-cases/get-all-doctors";

export async function getAllDoctors(_: FastifyRequest, res: FastifyReply) {
    try {

        const appointmentRepository = new DoctorsRepository()
        const createAppointment = new GetAllDoctors(appointmentRepository)
        const response = await createAppointment.handle()
        res.send(
            response
        ).status(2000)
    } catch (error: any) {
        console.log(error);
        res.send({ error: error.message }).status(500)
    }
}
