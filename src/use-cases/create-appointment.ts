import { IAppointmentsRepository } from "../repositories/appointments-repository-interface";

type CreateAppointmentType = {
    examtype: string,
    date: string, 
    doctorId: string, 
    patientId: string
}

export class CreateAppointment {
    constructor(private appointmentsRepository: IAppointmentsRepository) {}
    async handle({
        examtype,
        date, 
        doctorId, 
        patientId
    }: CreateAppointmentType) {
        await this.appointmentsRepository.create({
            examtype,
            date,
            doctorId,
            patientId
        })
        return `Agendamento realizado!`
    }
}