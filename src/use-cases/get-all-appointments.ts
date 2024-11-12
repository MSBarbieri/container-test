import { IAppointmentsRepository } from "../repositories/appointments-repository-interface";

export class GetAllAppointments {
    constructor(private appointmentsRepository: IAppointmentsRepository) {}

    async handle() {
        const appointments = await this.appointmentsRepository.getAllAppointments()
        return appointments
    }
}