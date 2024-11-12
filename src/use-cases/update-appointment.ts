import { IAppointmentsRepository } from "../repositories/appointments-repository-interface";

type UpdateAppointmentType = {
    id: string,
    status: string
}

export class UpdateAppointment {
    constructor(private appointmentsRepository: IAppointmentsRepository) {}

    async handle({
        id,
        status
    }: UpdateAppointmentType) {
        const data = await this.appointmentsRepository.updateAppointment(id, status)
        return {
            msg: `Agendamento atualizado com sucesso!`,
            data,
        }
    }
}