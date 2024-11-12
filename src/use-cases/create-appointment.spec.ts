import { randomUUID } from "crypto"
import { MemoryAppointmentsRepository } from "../repositories/memory/memory-appointments-repository"
import { CreateAppointment } from "./create-appointment"

let memoryRepository: MemoryAppointmentsRepository
let sut: CreateAppointment

describe('Appointments', () => {
    beforeEach(() => {
        memoryRepository = new MemoryAppointmentsRepository()
        sut = new CreateAppointment(memoryRepository)
    })

    it('must create an appointment', async () => {
        const appointment = {
            id: randomUUID(),
            examtype: 'Exame de Sangue',
            date: new Date().toISOString(),
            doctorId: randomUUID(),
            patientId: randomUUID(),
            status: 'Agendado'
        }
        const result = await sut.handle(appointment)
        expect(result).toBe('Agendamento realizado!')
    })
})