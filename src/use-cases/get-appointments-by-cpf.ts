import { IAppointmentsRepository } from "../repositories/appointments-repository-interface";

export class GetApopintmentsByCpf {
    constructor(private appointmentsRepository: IAppointmentsRepository) {}

    async handle(cpf: string) {
        const result = await this.appointmentsRepository.getAppointmentsByCpf(cpf)
        return result
    }
}