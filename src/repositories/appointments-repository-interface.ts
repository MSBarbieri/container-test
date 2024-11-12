export type AppointmentRequest = {
    examtype: string,
    date: string, 
    doctorId: string, 
    patientId: string
}

export type AppointmentResponse = {
        id: string,
        examtype: string,
        date: string, 
        doctorId: string, 
        patientId: string,
        status: string,
}

export interface IAppointmentsRepository {
    create(data: AppointmentRequest): Promise<void>
    getAllAppointments(): Promise<AppointmentResponse[]>
    getAppointmentsByCpf(cpf: string): Promise<AppointmentResponse[]>
    updateAppointment(id: string, status: string): Promise<AppointmentResponse[]>
}