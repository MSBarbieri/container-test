import { randomUUID } from "crypto"
import { MemoryAppointmentsRepository } from "../repositories/memory/memory-appointments-repository"
import { GetAllAppointments } from "./get-all-appointments"

let memoryRepository: MemoryAppointmentsRepository
let sut: GetAllAppointments

describe('Get all appointments', () => {
    beforeEach(() => {
        memoryRepository = new MemoryAppointmentsRepository()
        sut = new GetAllAppointments(memoryRepository)
    })

    it('must get all appointments', async () => {
        const first_register = {
            id: randomUUID(),
            examtype: 'Exame de Sangue',
            date: new Date().toISOString(),
            doctorId: randomUUID(),
            patientId: randomUUID(),
            status: 'Agendado'
        }
        const second_register = {
            id: randomUUID(),
            examtype: 'Exame de rotina',
            date: new Date().toISOString(),
            doctorId: randomUUID(),
            patientId: randomUUID(),
            status: 'Agendado'
        }
        memoryRepository.create(first_register)
        memoryRepository.create(second_register)
        const appointments = await sut.handle()
        expect(appointments).toHaveLength(2)
    })
})