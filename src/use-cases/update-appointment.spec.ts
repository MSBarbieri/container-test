import { randomUUID } from "crypto";
import { MemoryAppointmentsRepository } from "../repositories/memory/memory-appointments-repository";
import { UpdateAppointment } from "./update-appointment";

let memoryRepository: MemoryAppointmentsRepository
let sut: UpdateAppointment

describe('Update appointment', () => {
    beforeEach(() => {
        memoryRepository = new MemoryAppointmentsRepository()
        sut = new UpdateAppointment(memoryRepository)
    })

    it('must update an appointment', async () => {
        const register = {
            id: randomUUID(),
            examtype: 'Exame de Sangue',
            date: new Date().toISOString(),
            doctorId: randomUUID(),
            patientId: randomUUID(),
            status: 'Agendado'
        }
        await memoryRepository.create(register)
        const data = {
            id: register.id,
            status: 'Finalizado'
        }
        const result = await sut.handle(data)
        expect(register).toHaveProperty('status')
        expect(register.status).toBe('Agendado')
        expect(result.data[0].status).toBe(data.status)
    })
})