import { FastifyReply, FastifyRequest } from "fastify"
import { CreatePatient } from "../../use-cases/create-patient"
import { PatientsRepository } from "../../repositories/patients-repository"

export async function create (req: FastifyRequest, res: FastifyReply) {
    const data: any = req.body
    const patientsRepoistory = new PatientsRepository()
    const createAppointment = new CreatePatient(patientsRepoistory)
    const response = await createAppointment.handle(data)
    res.send(
        response
    ).status(200)
}