import { AppointmentResponse, IAppointmentsRepository } from "../appointments-repository-interface";

type Appointments = {
    id: string,
    examtype: string,
    date: string, 
    doctorId: string, 
    patientId: string,
    status: string,
}

export class MemoryAppointmentsRepository implements IAppointmentsRepository {
    public appointments: Appointments[] = []

    async create(data: { id: string, examtype: string; date: string; doctorId: string; patientId: string; status: string}) {
        const appointment: Appointments = {
            id: data.id,
            examtype: data.examtype,
            date: data.date,
            doctorId: data.doctorId,
            patientId: data.patientId,
            status: data.status
        }
        this.appointments.push(appointment)
    }

    async getAllAppointments() {
        return this.appointments
    }
    
    async getAppointmentsByCpf(cpf: string) {
        /* TODO */
        return this.appointments
    }

    async updateAppointment(id: string, status: string) {
        const list: Appointments[] = []
        for (let i = 0; i < this.appointments.length; i++) {
            if (this.appointments[i].id === id) {
                this.appointments[i].status = status
                list.push(this.appointments[i])
            }
        }
        return list
    }
}