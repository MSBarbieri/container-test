import { IPatientsRepository } from "../repositories/patients-repository-interface"

interface CreatePatientData {
    name: string,
    phone: string,
    cpf: string
}

export class CreatePatient {
    constructor(private PatientsRepository: IPatientsRepository) {}
    async handle({
        cpf,
        name,
        phone
    }: CreatePatientData) {
        await this.PatientsRepository.create({
            cpf,
            name,
            phone
        })
        return `Paciente registrado!`
    }
}